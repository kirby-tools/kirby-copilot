<script setup lang="ts">
import type { SkillSuggestState } from "./plugins/skill-suggest";
import { EditorState, TextSelection } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { generateRandomId } from "utilful";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { filterSkills, useSkills } from "../../composables/skills";
import {
  createDocFromText,
  createEditorPlugins,
  createPlaceholderPlugin,
  getPlainText,
} from "./editor";
import {
  commitSkillSuggestion,
  computeDropdownPosition,
  setSkillSuggestSelectedIndex,
} from "./plugins/skill-suggest";
import SkillSuggestDropdown from "./SkillSuggestDropdown.vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "input", value: string): void;
  (e: "submit"): void;
  (e: "keydown", event: KeyboardEvent): void;
}>();

const editor = ref<HTMLDivElement>();
let view: EditorView | undefined;
let updatingFromProp = false;

const placeholder = createPlaceholderPlugin(props.placeholder);

const listboxId = `k-copilot-skill-suggest-${generateRandomId(8)}`;

const { skills, hasSkill } = useSkills();
const suggestState = ref<SkillSuggestState>({ open: false });
const isFocused = ref(false);

const filteredSkills = computed(() =>
  suggestState.value.open
    ? filterSkills(skills.value, suggestState.value.query)
    : [],
);

onMounted(() => {
  if (!editor.value) return;

  const doc = createDocFromText(props.value);
  const state = EditorState.create({
    doc,
    selection: TextSelection.atEnd(doc),
    plugins: createEditorPlugins({
      onSubmit: () => emit("submit"),
      onKeydown: (event) => emit("keydown", event),
      placeholder,
      skills: {
        has: hasSkill,
        suggest: {
          onStateChange: onSuggestStateChange,
          onCommit: onSuggestCommit,
          getOptionCount: (query) => filterSkills(skills.value, query).length,
          listboxId,
        },
      },
    }),
  });

  view = new EditorView(editor.value, {
    state,
    dispatchTransaction(tr) {
      if (!view) return;
      const newState = view.state.apply(tr);
      view.updateState(newState);

      if (tr.docChanged && !updatingFromProp) {
        emit("input", getPlainText(newState));
      }
    },
  });

  view.dom.addEventListener("focus", onEditorFocus);
  view.dom.addEventListener("blur", onEditorBlur);

  if (props.autofocus) focus();

  window.addEventListener("scroll", onViewportChange, true);
  window.addEventListener("resize", onViewportChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onViewportChange, true);
  window.removeEventListener("resize", onViewportChange);
  view?.dom.removeEventListener("focus", onEditorFocus);
  view?.dom.removeEventListener("blur", onEditorBlur);
  view?.destroy();
  view = undefined;
});

// Sync external value changes into ProseMirror
watch(
  () => props.value,
  (newValue) => {
    if (!view) return;
    const currentText = getPlainText(view.state);
    if (currentText === newValue) return;

    updatingFromProp = true;
    const doc = createDocFromText(newValue);
    const tr = view.state.tr
      .replaceWith(0, view.state.doc.content.size, doc.content)
      .setMeta("addToHistory", false);
    const clampedPos = Math.min(view.state.selection.head, tr.doc.content.size);
    tr.setSelection(TextSelection.near(tr.doc.resolve(clampedPos)));
    view.dispatch(tr);
    updatingFromProp = false;
  },
);

// Update placeholder text when prop changes
watch(
  () => props.placeholder,
  (newText) => {
    if (!view) return;
    placeholder.setPlaceholder(newText);
    view.dispatch(view.state.tr);
  },
);

// Skills load asynchronously – repaint token decorations when they arrive
watch(skills, () => view?.dispatch(view.state.tr));

function onViewportChange() {
  if (!view || !suggestState.value.open) return;
  suggestState.value = {
    ...suggestState.value,
    ...computeDropdownPosition(view, suggestState.value.from),
  };
}

function onEditorFocus() {
  isFocused.value = true;
}

function onEditorBlur() {
  if (!document.hasFocus()) return;
  isFocused.value = false;
}

function onSuggestStateChange(next: SkillSuggestState) {
  suggestState.value = next;
}

function onSuggestCommit(index: number) {
  if (!view) return;
  const skill = filteredSkills.value[index];
  if (!skill) return;
  commitSkillSuggestion(view, skill.id);
}

function onDropdownSelect(id: string) {
  if (!view) return;
  commitSkillSuggestion(view, id);
}

function onDropdownHover(index: number) {
  if (!view) return;
  setSkillSuggestSelectedIndex(view, index);
}

function insertAtCursor(textToInsert: string) {
  if (!view) return;
  const { from, to } = view.state.selection;
  const tr = view.state.tr.insertText(textToInsert, from, to).scrollIntoView();
  view.dispatch(tr);
  view.focus();
}

function getCursorOffset(): number {
  if (!view) return 0;
  const { head } = view.state.selection;
  return view.state.doc.textBetween(0, head, "\n").length;
}

function focus() {
  if (!view) return;
  const { doc } = view.state;
  const tr = view.state.tr.setSelection(TextSelection.atEnd(doc));
  view.dispatch(tr);
  view.focus();
}

defineExpose({
  insertAtCursor,
  getCursorOffset,
  focus,
});
</script>

<template>
  <div class="k-copilot-prompt-editor-root">
    <div ref="editor" class="k-copilot-prompt-editor" />
    <SkillSuggestDropdown
      v-if="suggestState.open && isFocused && filteredSkills.length > 0"
      :skills="filteredSkills"
      :selected-index="suggestState.selectedIndex"
      :top="suggestState.top"
      :bottom="suggestState.bottom"
      :left="suggestState.left"
      :anchor-in-token="suggestState.query.length > 0"
      :listbox-id="listboxId"
      @select="onDropdownSelect"
      @hover="onDropdownHover"
    />
  </div>
</template>

<style>
.k-copilot-prompt-editor {
  min-height: calc(1.5em * 3 + 1rem);
}

.k-copilot-prompt-editor .ProseMirror {
  padding: 0.5rem;
  line-height: 1.5;
  outline: none;
  min-height: calc(1.5em * 3 + 1rem);
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

.k-copilot-prompt-has-placeholder {
  position: relative;
}

.k-copilot-prompt-has-placeholder::before {
  content: attr(data-placeholder);
  color: var(--color-text-dimmed);
  pointer-events: none;
  position: absolute;
}

[class*="k-copilot-token-"] {
  border-radius: var(--rounded-xs);
  padding-inline: var(--spacing-1);
}

.k-copilot-token-placeholder {
  color: light-dark(var(--color-purple-800), var(--color-purple-900));
  background: var(--color-purple-300);
}

.k-copilot-token-page-ref {
  color: light-dark(var(--color-blue-800), var(--color-blue-900));
  background: var(--color-blue-300);
}

.k-copilot-token-skill-ref {
  color: light-dark(var(--color-green-800), var(--color-green-900));
  background: var(--color-green-300);
}

.k-copilot-token-skill-ref-unknown {
  color: light-dark(var(--color-red-800), var(--color-red-900));
  background: var(--color-red-300);
  text-decoration: line-through;
}
</style>
