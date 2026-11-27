import type { KirbyLayout } from "kirby-types";
import { describe, expect, it } from "vitest";
import { createItemNormalizer } from "../../../src/panel/composables/kirby-content";

describe("createItemNormalizer", () => {
  it("gives the block at a position the same ID in every partial of a run", () => {
    const normalizeItems = createItemNormalizer();
    const partial = () => [{ type: "text" }, { type: "text" }];

    const first = normalizeItems("blocks", partial(), "text");
    const second = normalizeItems("blocks", partial(), "text");
    const [otherField] = normalizeItems("blocks", partial(), "intro");

    expect(second.map((block) => block.id)).toEqual(
      first.map((block) => block.id),
    );
    expect(first[1]!.id).not.toBe(first[0]!.id);
    expect(otherField!.id).not.toBe(first[0]!.id);
  });

  it("gives a layout, its columns, and their blocks the same IDs in every partial of a run", () => {
    const normalizeItems = createItemNormalizer();
    const partial = () => [
      { columns: [{ blocks: [{ type: "text" }] }, { blocks: [] }] },
    ];

    const [first] = normalizeItems("layout", partial(), "layout") as [
      KirbyLayout,
    ];
    const [second] = normalizeItems("layout", partial(), "layout") as [
      KirbyLayout,
    ];

    expect(second.id).toBe(first.id);
    expect(second.columns.map((column) => column.id)).toEqual(
      first.columns.map((column) => column.id),
    );
    expect(second.columns[0]!.blocks[0]!.id).toBe(
      first.columns[0]!.blocks[0]!.id,
    );
    expect(
      new Set([first.id, ...first.columns.map((column) => column.id)]).size,
    ).toBe(3);
  });

  it("starts a new run with new IDs", () => {
    const [first] = createItemNormalizer()("blocks", [{}], "text");
    const [second] = createItemNormalizer()("blocks", [{}], "text");

    expect(second!.id).not.toBe(first!.id);
  });
});
