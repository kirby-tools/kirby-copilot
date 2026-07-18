import { describe, expect, it } from "vitest";
import {
  createRefTokenRegex,
  extractRefIds,
} from "../../../src/panel/utils/reference-tokens";

describe("reference token grammar", () => {
  it("builds a matcher for any token kind, scoped to the given id charset", () => {
    const regex = createRefTokenRegex("file", String.raw`[\w\-]`);

    expect(
      extractRefIds("see @file://report-v2 but not @page://about", regex),
    ).toEqual(["report-v2"]);
  });

  it("extracts ids in document order, preserving duplicates for caller dedup", () => {
    const regex = createRefTokenRegex("page", String.raw`[\w\-/]`);

    expect(extractRefIds("@page://a then @page://b/c then @page://a", regex)).toEqual(
      ["a", "b/c", "a"],
    );
  });
});
