<script setup lang="ts">
import { EditorState, TextSelection } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import {
  createDocFromText,
  createEditorPlugins,
  createPlaceholderPlugin,
  getPlainText,
} from "./prompt-editor";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
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
});

onBeforeUnmount(() => {
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
  <div ref="editor" class="k-copilot-prompt-editor" />
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

.k-copilot-token-placeholder {
  color: light-dark(var(--color-purple-800), var(--color-purple-900));
  background: var(--color-purple-300);
  border-radius: var(--rounded-xs);
  padding-inline: var(--spacing-1);
}

.k-copilot-token-page-ref {
  color: light-dark(var(--color-blue-800), var(--color-blue-900));
  background: var(--color-blue-300);
  border-radius: var(--rounded-xs);
  padding-inline: var(--spacing-1);
}
</style>
