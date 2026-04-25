import type { EditorState, Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import { Plugin, PluginKey } from "prosemirror-state";
import { createSkillTriggerRegex } from "../../../composables/skills";

export interface SkillSuggestState {
  open: boolean;
  query: string;
  from: number;
  top: number;
  left: number;
  selectedIndex: number;
}

export interface SkillSuggestHandlers {
  onStateChange: (state: SkillSuggestState) => void;
  onCommit: (index: number) => void;
  getOptionCount: (query: string) => number;
  /** If provided, ARIA combobox attrs are set on the editor DOM. */
  listboxId?: string;
}

interface SkillSuggestPluginState {
  open: boolean;
  query: string;
  from: number;
  to: number;
  selectedIndex: number;
}

type SkillSuggestMeta =
  | { type: "dismiss" }
  | { type: "moveSelection"; delta: 1 | -1 }
  | { type: "setSelectedIndex"; index: number };

const EMPTY_PLUGIN_STATE: SkillSuggestPluginState = {
  open: false,
  query: "",
  from: 0,
  to: 0,
  selectedIndex: 0,
};

const skillSuggestPluginKey = new PluginKey<SkillSuggestPluginState>(
  "skill-suggest",
);

function setSkillSuggestMeta(tr: Transaction, meta: SkillSuggestMeta) {
  tr.setMeta(skillSuggestPluginKey, meta);
  return tr;
}

/**
 * Commits a typeahead pick: replaces the matched range with `@skill://<id>`
 * and dismisses the dropdown. The dismiss meta short-circuits the apply
 * function so the just-inserted token isn't immediately re-detected as a
 * fresh trigger on the same tick.
 */
export function commitSkillSuggestion(view: EditorView, id: string) {
  const state = skillSuggestPluginKey.getState(view.state);
  if (!state?.open) return;

  const tr = view.state.tr.insertText(`@skill://${id}`, state.from, state.to);
  setSkillSuggestMeta(tr, { type: "dismiss" });
  view.dispatch(tr);
  view.focus();
}

export function dismissSkillSuggestion(view: EditorView) {
  const state = skillSuggestPluginKey.getState(view.state);
  if (!state?.open) return;

  view.dispatch(setSkillSuggestMeta(view.state.tr, { type: "dismiss" }));
}

export function setSkillSuggestSelectedIndex(view: EditorView, index: number) {
  const state = skillSuggestPluginKey.getState(view.state);
  if (!state || state.selectedIndex === index) return;

  view.dispatch(
    setSkillSuggestMeta(view.state.tr, { type: "setSelectedIndex", index }),
  );
}

function detectSkillSuggestion(
  state: EditorState,
): Pick<SkillSuggestPluginState, "open" | "query" | "from" | "to"> {
  const { selection, doc } = state;
  if (!selection.empty) return { open: false, query: "", from: 0, to: 0 };

  const cursor = selection.head;
  const $pos = doc.resolve(cursor);
  const blockStart = $pos.start();
  const textBefore = doc.textBetween(blockStart, cursor, "\n");

  const match = textBefore.match(createSkillTriggerRegex());
  if (!match) return { open: false, query: "", from: 0, to: 0 };

  return {
    open: true,
    query: match[1] ?? "",
    from: cursor - match[0].length,
    to: cursor,
  };
}

export function createSkillSuggestPlugin(options: SkillSuggestHandlers) {
  return new Plugin<SkillSuggestPluginState>({
    key: skillSuggestPluginKey,
    state: {
      init: () => EMPTY_PLUGIN_STATE,
      apply(tr, value, _oldState, newState) {
        const meta = tr.getMeta(skillSuggestPluginKey) as
          | SkillSuggestMeta
          | undefined;

        if (meta) {
          switch (meta.type) {
            case "dismiss":
              return EMPTY_PLUGIN_STATE;
            case "moveSelection": {
              const count = options.getOptionCount(value.query);
              if (count === 0) return value;
              return {
                ...value,
                selectedIndex:
                  (value.selectedIndex + meta.delta + count) % count,
              };
            }
            case "setSelectedIndex": {
              const count = options.getOptionCount(value.query);
              if (count === 0) return value;
              return {
                ...value,
                selectedIndex: Math.max(0, Math.min(meta.index, count - 1)),
              };
            }
            default: {
              const _exhaustive: never = meta;
              void _exhaustive;
            }
          }
        }

        const trigger = detectSkillSuggestion(newState);

        // Suppress when there's no trigger, or a pure cursor movement landed
        // on an existing trigger (so cursor-into-existing-token doesn't pop).
        const shouldSuppress = !trigger.open || (!value.open && !tr.docChanged);

        if (shouldSuppress) {
          return EMPTY_PLUGIN_STATE;
        }

        // Reset index on fresh open or query change
        const resetIndex = !value.open || trigger.query !== value.query;

        return {
          ...trigger,
          selectedIndex: resetIndex ? 0 : value.selectedIndex,
        };
      },
    },
    props: {
      handleKeyDown(view, event) {
        // Let IME candidate selection own Enter/Arrow keys during composition
        if (event.isComposing) return false;

        const state = skillSuggestPluginKey.getState(view.state);
        if (!state?.open) return false;

        if (event.key === "Escape") {
          dismissSkillSuggestion(view);
          return true;
        }

        if (options.getOptionCount(state.query) === 0) return false;

        if (event.key === "ArrowDown") {
          view.dispatch(
            setSkillSuggestMeta(view.state.tr, {
              type: "moveSelection",
              delta: 1,
            }),
          );
          return true;
        }
        if (event.key === "ArrowUp") {
          view.dispatch(
            setSkillSuggestMeta(view.state.tr, {
              type: "moveSelection",
              delta: -1,
            }),
          );
          return true;
        }
        if (event.key === "Enter" || event.key === "Tab") {
          options.onCommit(state.selectedIndex);
          return true;
        }
        return false;
      },
      attributes(state) {
        if (!options.listboxId) return {};

        const pluginState = skillSuggestPluginKey.getState(state);
        const isOpen =
          !!pluginState?.open && options.getOptionCount(pluginState.query) > 0;
        const attrs: Record<string, string> = {
          "aria-autocomplete": "list",
          "aria-expanded": isOpen ? "true" : "false",
        };

        if (isOpen) {
          attrs["aria-controls"] = options.listboxId;
          attrs["aria-activedescendant"] =
            `${options.listboxId}-opt-${pluginState!.selectedIndex}`;
        }

        return attrs;
      },
    },
    view() {
      type Snapshot = Pick<
        SkillSuggestPluginState,
        "open" | "query" | "from" | "selectedIndex"
      >;
      let lastState: Snapshot | null = null;

      return {
        update(view) {
          // Skip during IME composition to avoid mid-character triggers
          if (view.composing) return;

          const state = skillSuggestPluginKey.getState(view.state);
          if (!state) return;

          const snapshot: Snapshot = {
            open: state.open,
            query: state.query,
            from: state.from,
            selectedIndex: state.selectedIndex,
          };

          if (
            lastState &&
            lastState.open === snapshot.open &&
            lastState.from === snapshot.from &&
            lastState.query === snapshot.query &&
            lastState.selectedIndex === snapshot.selectedIndex
          ) {
            return;
          }
          lastState = snapshot;

          const base = {
            open: snapshot.open,
            query: snapshot.query,
            from: snapshot.from,
            selectedIndex: snapshot.selectedIndex,
          };

          if (!snapshot.open) {
            options.onStateChange({ ...base, top: 0, left: 0 });
            return;
          }

          const coords = view.coordsAtPos(snapshot.from);
          options.onStateChange({
            ...base,
            top: coords.bottom,
            left: coords.left,
          });
        },
        destroy() {
          lastState = null;
        },
      };
    },
  });
}
