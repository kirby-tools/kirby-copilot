import { describe, expect, it } from "vitest";
import {
  createPageRefTokenRegex,
  extractPageRefIds,
} from "../../../src/panel/composables/pages";

describe("createPageRefTokenRegex", () => {
  it("captures nested paths with slashes and hyphens", () => {
    const ids = Array.from(
      "see @page://blog/2024-02-01 and @page://about".matchAll(
        createPageRefTokenRegex(),
      ),
      (match) => match[1],
    );

    expect(ids).toEqual(["blog/2024-02-01", "about"]);
  });
});

describe("extractPageRefIds", () => {
  it("returns ids in document order", () => {
    expect(
      extractPageRefIds("@page://a and @page://b/c and @page://a"),
    ).toEqual(["a", "b/c", "a"]);
  });

  it("ignores skill tokens", () => {
    expect(extractPageRefIds("@skill://brand-voice @page://about")).toEqual([
      "about",
    ]);
  });
});
