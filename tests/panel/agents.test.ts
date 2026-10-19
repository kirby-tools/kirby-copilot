import type { Panel } from "kirby-types";
import { describe, expect, it, vi } from "vitest";
import { nextTick, reactive } from "vue";
import { keepAgentWrites, whenAgentsEnabled } from "../../src/panel/agents";
import { usePluginContext } from "../../src/panel/composables/plugin";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("./helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

vi.mock("../../src/panel/composables/plugin", () => ({
  usePluginContext: vi.fn(),
}));

const VIEW_LOADED_AT = 1000;

describe("keepAgentWrites", () => {
  it("saves only the fields the editor changed since the view loaded", async () => {
    const { panel, requests } = createPanel({ writtenAt: null });

    await panel.content.update({ text: "Edited" });

    expect(requests).toEqual([{ method: "save", values: { text: "Edited" } }]);
  });

  it("saves a field the editor changes back to its loaded value", async () => {
    const { panel, requests } = createPanel({ writtenAt: null });

    await panel.content.update({ text: "Edited" });
    await panel.content.update({ text: "Draft" });

    expect(requests.at(-1)).toEqual({
      method: "save",
      values: { text: "Draft" },
    });
  });

  it("saves only the fields the editor changed since the view reloaded", async () => {
    const { panel, requests, server } = createPanel({ writtenAt: null });

    server.changes.title = "Agent";
    await panel.view.reload();
    await panel.content.update({ text: "Edited" });

    expect(requests).toEqual([{ method: "save", values: { text: "Edited" } }]);
  });

  it("reloads the view instead of publishing after an agent wrote since it loaded", async () => {
    const { panel, requests } = createPanel({ writtenAt: VIEW_LOADED_AT + 1 });

    await expect(panel.content.publish()).rejects.toThrow(
      "johannschopplich.copilot.agents.reloaded.instead",
    );

    expect(requests.map(({ method }) => method)).toEqual(["save"]);
    expect(panel.view.timestamp).toBeGreaterThan(VIEW_LOADED_AT);
  });
});

describe("whenAgentsEnabled", () => {
  it("calls guard as soon as a view after the login loads the plugin context", async () => {
    vi.mocked(usePluginContext)
      .mockReset()
      .mockRejectedValueOnce(new Error("Unauthenticated"))
      .mockResolvedValue({ config: { agents: true } } as any);
    const panel = reactive({ view: { timestamp: 1 } }) as unknown as Panel;
    const guard = vi.fn();

    whenAgentsEnabled(panel, guard);
    await flushPromises();
    panel.view.timestamp = 2;
    await flushPromises();
    panel.view.timestamp = 3;
    await flushPromises();

    expect(guard).toHaveBeenCalledTimes(1);
  });

  it("never calls guard while the plugin context says agents are off", async () => {
    vi.mocked(usePluginContext)
      .mockReset()
      .mockResolvedValue({ config: { agents: false } } as any);
    const panel = reactive({ view: { timestamp: 1 } }) as unknown as Panel;
    const guard = vi.fn();

    whenAgentsEnabled(panel, guard);
    await flushPromises();
    panel.view.timestamp = 2;
    await flushPromises();

    expect(guard).not.toHaveBeenCalled();
  });
});

async function flushPromises() {
  await nextTick();
  await new Promise((resolve) => setTimeout(resolve));
}

function createPanel({ writtenAt }: { writtenAt: number | null }) {
  const requests: { method: string; values: Record<string, unknown> }[] = [];
  const server = {
    latest: { title: "Hello", text: "" },
    changes: { title: "Hello", text: "Draft" },
  };
  const loadVersions = () => ({
    latest: { ...server.latest },
    changes: { ...server.changes },
  });

  const panel = reactive({
    api: { get: async () => ({ writtenAt }) },
    view: {
      path: "pages/notes",
      timestamp: VIEW_LOADED_AT,
      props: { versions: loadVersions() },
      async reload() {
        panel.view.props = { versions: loadVersions() };
        panel.view.timestamp = VIEW_LOADED_AT + 2;
      },
    },
    language: { code: null },
    dialog: { close() {} },
    t: (key: string) => key,
    // Mirrors how Kirby's `panel.content` routes every action through `request`.
    content: {
      isCurrent: () => true,
      cancelSaving() {},
      async request(method: string, values: Record<string, unknown>) {
        requests.push({ method, values });
      },
      async update(values = {}) {
        const { versions } = panel.view.props;
        versions.changes = { ...versions.changes, ...values };
        await this.request("save", versions.changes);
        return true;
      },
      async publish(values = {}) {
        await this.request("publish", {
          ...panel.view.props.versions.changes,
          ...values,
        });
      },
      async discard() {
        await this.request("discard", {});
      },
    },
  }) as unknown as Panel;

  keepAgentWrites(panel);

  return { panel, requests, server };
}
