import { isAbortError } from "@ai-sdk/provider-utils";
import { loadPluginModule } from "kirbyuse";
import { PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";
import { resolveLanguageModel } from "../../composables";
import {
  COMPLETION_MAX_TOKENS,
  COMPLETION_SYSTEM_PROMPT,
} from "../../constants";

const DEBOUNCE_MS = 500;
export const completionPluginKey = new PluginKey("copilot-completion");

export const copilotCompletion = {
  get name() {
    return "copilot-completion";
  },

  keys() {
    return {
      Tab: () => this._acceptSuggestion(),
      Escape: () => this._dismissSuggestion(),
      "Mod-,": () => this._triggerCompletion(),
    };
  },

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

    return true;
  },

  _dismissSuggestion() {
    const { view } = this.editor;
    const pluginState = completionPluginKey.getState(view.state);
    if (!pluginState?.suggestion && !pluginState?.isLoading) return false;

    const tr = view.state.tr.setMeta(completionPluginKey, {
      suggestion: null,
      position: null,
      isLoading: false,
    });
    view.dispatch(tr);

    return true;
  },

  _triggerCompletion() {
    const { view } = this.editor;
    const tr = view.state.tr.setMeta(completionPluginKey, {
      manualTrigger: true,
    });
    view.dispatch(tr);
    return true;
  },
};

/**
 * Creates the ProseMirror plugin spec for tab completion.
 *
 * @param {object} _context - The mark context from Kirby
 * @param {object} _mark - The mark instance
 * @returns {import("prosemirror-state").PluginSpec} Plugin spec with state, view, and props
 */
function createCompletionPlugin(_context, _mark) {
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
          // Handle skip action from Copilot prompt dialog
          if (meta.action === "skip") {
            deduplicateRequest();
            return {
              suggestion: null,
              position: null,
              isLoading: false,
              skipNextTrigger: true,
            };
          }

          // Abort any active request when loading ends (dismiss, accept, error)
          if (meta.isLoading === false) {
            deduplicateRequest();
          }

          const { action, ...stateUpdates } = meta;
          return { ...pluginState, ...stateUpdates };
        }

        // Clear suggestion on document change
        if (tr.docChanged) {
          deduplicateRequest();
          return {
            suggestion: null,
            position: null,
            isLoading: false,
          };
        }

        return pluginState;
      },
    },

    view() {
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
            generateCompletion(view);
            return;
          }

          // Check skip flag from copilot prompt dialog
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
          if (!view.state.doc.eq(prevState.doc)) {
            debounceTimer = setTimeout(() => {
              // Only trigger if cursor is at the end of a text block
              if (!isCursorAtEndOfBlock(view.state)) return;

              generateCompletion(view);
            }, DEBOUNCE_MS);
          }
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
        if (!pluginState?.suggestion || pluginState.position === null) {
          return DecorationSet.empty;
        }

        // Create widget decoration for ghost text
        const widget = Decoration.widget(
          pluginState.position,
          () => {
            const span = document.createElement("span");
            span.className = "k-copilot-ghost-text";
            span.textContent = pluginState.suggestion;
            return span;
          },
          { side: 1 }, // Place after the cursor position
        );

        return DecorationSet.create(state.doc, [widget]);
      },
      handleDOMEvents: {
        blur: (view) => dismissSuggestion(view),
      },
    },
  };

  async function generateCompletion(view) {
    abortController?.abort();
    abortController = new AbortController();

    const { state } = view;
    const position = state.selection.head;

    // Get text before cursor
    const textBefore = getTextBeforeCursor(state, 500);
    if (!textBefore.trim()) return;

    // Mark as loading
    const tr = state.tr.setMeta(completionPluginKey, {
      suggestion: null,
      position,
      isLoading: true,
    });
    view.dispatch(tr);

    try {
      const { model } = await resolveLanguageModel({ forCompletion: true });
      const { generateText } = await loadPluginModule("ai");

      const { text } = await generateText({
        model,
        system: COMPLETION_SYSTEM_PROMPT,
        prompt: textBefore,
        maxTokens: COMPLETION_MAX_TOKENS,
        abortSignal: abortController.signal,
      });

      // Apply space prefix logic
      const needsSpace = textBefore.length > 0 && !/\s$/.test(textBefore);
      const suggestion =
        needsSpace && !text.startsWith(" ") ? ` ${text}` : text;

      // Show final result
      const completeTr = view.state.tr.setMeta(completionPluginKey, {
        suggestion,
        position,
        isLoading: false,
      });
      view.dispatch(completeTr);
    } catch (error) {
      if (isAbortError(error)) return;

      console.error("Failed to generate completion:", error);

      // Clear state on error
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
 * Checks if the cursor is at the end of a text block (paragraph, heading, etc.).
 *
 * @param {import("prosemirror-state").EditorState} state - The editor state
 * @returns {boolean} True if no content follows the cursor in the current block
 */
function isCursorAtEndOfBlock(state) {
  const { $head } = state.selection;
  return $head.parentOffset === $head.parent.content.size;
}

/**
 * Gets text before the cursor, limited to a maximum length.
 *
 * @param {import("prosemirror-state").EditorState} state - The editor state
 * @param {number} [maxLength] - Maximum length of text to return
 * @returns {string} Text before the cursor
 */
function getTextBeforeCursor(state, maxLength = 500) {
  const { $head } = state.selection;

  // Get text from current block
  const blockText = $head.parent.textContent;
  const offset = $head.parentOffset;
  const textInBlock = blockText.slice(0, offset);

  return textInBlock.slice(-maxLength);
}

/**
 * Dismisses any active suggestion.
 *
 * @param {import("prosemirror-view").EditorView} view - The ProseMirror editor view
 */
function dismissSuggestion(view) {
  const pluginState = completionPluginKey.getState(view.state);
  if (!pluginState?.suggestion && !pluginState?.isLoading) return;

  const tr = view.state.tr.setMeta(completionPluginKey, {
    suggestion: null,
    position: null,
    isLoading: false,
  });
  view.dispatch(tr);
}
