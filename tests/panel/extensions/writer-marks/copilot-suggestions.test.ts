import type { PluginSpec, Transaction } from "prosemirror-state";
import type { EditorView } from "prosemirror-view";
import type { CompletionPluginState } from "../../../../src/panel/extensions/writer-marks/copilot-suggestions";
import type { PluginConfig } from "../../../../src/panel/types";
import { Schema } from "prosemirror-model";
import { EditorState, Plugin } from "prosemirror-state";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { COMPLETION_ERROR_COOLDOWN_MS } from "../../../../src/panel/constants";

const DEBOUNCE_MS = 300;

const mockUsePluginContext = vi.fn();
const mockStreamText = vi.fn();

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../../helpers/mock-kirbyuse");
  return { ...baseKirbyuseMock(), isLocalDev: () => false };
});

vi.mock("../../../../src/panel/composables/plugin", () => ({
  usePluginContext: () => mockUsePluginContext(),
}));

vi.mock("../../../../src/panel/composables/ai", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  resolveLanguageModel: () => Promise.resolve({ model: {}, reasoning: {} }),
}));

vi.mock("../../../../src/panel/utils/ai", () => ({
  loadAISDK: () => Promise.resolve({ streamText: mockStreamText }),
}));

const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    paragraph: {
      content: "inline*",
      group: "block",
      toDOM: () => ["p", 0] as const,
    },
    text: { group: "inline" },
  },
});

/** Emits nothing and never ends, so a started completion stays observable. */
async function* neverEndingStream(): AsyncGenerator<string> {
  await new Promise(() => {});
}

function createReleasableStream() {
  let release!: () => void;
  const released = new Promise<void>((resolve) => {
    release = resolve;
  });

  return {
    release,
    async *stream(): AsyncGenerator<string> {
      await released;
    },
  };
}

/**
 * Plays the part `EditorView` plays around the plugin: it routes a keystroke
 * through `handleTextInput` before the document changes, and runs the plugin
 * view's `update` after every dispatch.
 */
async function createEditor(completion: PluginConfig["completion"]) {
  mockUsePluginContext.mockResolvedValue({ config: { completion } });

  const { copilotSuggestions, getCompletionState, setCompletionMeta, triggerCompletion } =
    await import(
      "../../../../src/panel/extensions/writer-marks/copilot-suggestions"
    );

  const spec = copilotSuggestions.plugins!({
    schema,
  } as never)[0] as PluginSpec<CompletionPluginState>;

  const plugin = new Plugin(spec);
  let state = EditorState.create({
    doc: schema.node("doc", null, [schema.node("paragraph")]),
    plugins: [plugin],
  });
  let pluginView: ReturnType<NonNullable<typeof spec.view>>;
  let isComposing = false;

  const view = {
    get state() {
      return state;
    },
    get composing() {
      return isComposing;
    },
    dispatch(tr: Transaction) {
      const previousState = state;
      state = state.apply(tr);
      pluginView?.update?.(view, previousState);
    },
  } as unknown as EditorView;

  pluginView = spec.view!(view);

  // The plugin reads its config asynchronously when the view opens.
  await vi.advanceTimersByTimeAsync(0);

  function type(text: string) {
    const { from, to } = view.state.selection;
    const insertText = () => view.state.tr.insertText(text, from, to);

    const isHandled = spec.props!.handleTextInput!.call(
      plugin,
      view,
      from,
      to,
      text,
      insertText,
    );

    if (!isHandled) view.dispatch(insertText());
  }

  return {
    type,
    typeWhileComposing(text: string) {
      isComposing = true;
      type(text);
      isComposing = false;
    },
    insertProgrammatically(text: string) {
      view.dispatch(view.state.tr.insertText(text));
    },
    triggerManually: () => triggerCompletion(view),
    dismiss() {
      view.dispatch(setCompletionMeta(view.state.tr, { type: "dismiss" }));
    },
    isCompletionPending: () =>
      Boolean(getCompletionState(view.state)?.isLoading),
    abortSignalOfRequest: (index: number): AbortSignal =>
      mockStreamText.mock.calls[index]![0].abortSignal,
  };
}

async function createEditorAfterFailedRequest() {
  const editor = await createEditor({ debounce: DEBOUNCE_MS });
  mockStreamText.mockImplementationOnce(() => {
    throw new Error("Provider unreachable");
  });

  editor.type("Hello");
  await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

  return editor;
}

beforeEach(() => {
  vi.resetModules();
  vi.useFakeTimers();
  vi.spyOn(console, "error").mockImplementation(() => {});
  mockStreamText.mockReset();
  mockStreamText.mockImplementation(() => ({ textStream: neverEndingStream() }));
});

describe("inline completion", () => {
  it("starts a request when typing pauses", async () => {
    const editor = await createEditor({ debounce: DEBOUNCE_MS });

    editor.type("Hello");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(true);
  });

  it("ignores text a generation run writes into the field", async () => {
    const editor = await createEditor({ debounce: DEBOUNCE_MS });

    editor.insertProgrammatically("Text from a generation run");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(false);
  });

  it("starts no request during an IME composition", async () => {
    const editor = await createEditor({ debounce: DEBOUNCE_MS });

    editor.typeWhileComposing("にほんご");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(false);
  });

  it("starts no request when typing pauses and completion is false", async () => {
    const editor = await createEditor(false);

    editor.type("Hello");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(false);
  });

  it("starts a request on Mod-, when completion is false", async () => {
    const editor = await createEditor(false);
    editor.type("Hello");

    expect(editor.triggerManually()).toBe(true);
    expect(editor.isCompletionPending()).toBe(true);
  });

  it("starts no request at the next pause in typing after a failure", async () => {
    const editor = await createEditorAfterFailedRequest();

    editor.type(" world");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(false);
  });

  it("starts a request again once COMPLETION_ERROR_COOLDOWN_MS has passed", async () => {
    const editor = await createEditorAfterFailedRequest();
    await vi.advanceTimersByTimeAsync(COMPLETION_ERROR_COOLDOWN_MS);

    editor.type(" world");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);

    expect(editor.isCompletionPending()).toBe(true);
  });

  it("starts a request on Mod-, during the cooldown after a failure", async () => {
    const editor = await createEditorAfterFailedRequest();

    expect(editor.triggerManually()).toBe(true);
    expect(editor.isCompletionPending()).toBe(true);
  });

  it("keeps the newer request cancelable after the superseded one finished", async () => {
    const editor = await createEditor({ debounce: DEBOUNCE_MS });
    const supersededStream = createReleasableStream();
    mockStreamText.mockImplementationOnce(() => ({
      textStream: supersededStream.stream(),
    }));

    editor.type("Hello");
    await vi.advanceTimersByTimeAsync(DEBOUNCE_MS);
    editor.triggerManually();
    await vi.advanceTimersByTimeAsync(0);

    supersededStream.release();
    await vi.advanceTimersByTimeAsync(0);
    editor.dismiss();

    expect(editor.abortSignalOfRequest(1).aborted).toBe(true);
  });
});
