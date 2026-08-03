import { describe, expect, it } from "vitest";
import { normalizePlaceholders } from "../../../src/panel/utils/template";

describe("normalizePlaceholders", () => {
  it("lowercases placeholder keys and leaves the surrounding text untouched", () => {
    expect(normalizePlaceholders("Summarize {Title} and {Description}")).toBe(
      "Summarize {title} and {description}",
    );
  });
});
