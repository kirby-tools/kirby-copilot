import { describe, expect, it } from "vitest";
import {
  createRefTokenRegex,
  extractRefIds,
  insertRefToken,
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

  it("skips a token that directly follows a word character", () => {
    const regex = createRefTokenRegex("page", String.raw`[\w\-/]`);

    expect(
      extractRefIds("@page://start ok(@page://in-paren mid@page://word", regex),
    ).toEqual(["start", "in-paren"]);
  });

  it("matches a token wrapped in quotes", () => {
    const regex = createRefTokenRegex("page", String.raw`[\w\-/]`);

    expect(
      extractRefIds('Fasse "@page://about" und „@page://team“ zusammen', regex),
    ).toEqual(["about", "team"]);
  });

  it("matches a token at the start of a line after a newline", () => {
    const regex = createRefTokenRegex("skill", String.raw`[\w\-]`);

    expect(extractRefIds("first line\n@skill://brand-voice", regex)).toEqual([
      "brand-voice",
    ]);
  });
});

describe("insertRefToken", () => {
  it("inserts without a prefix after an opening quote", () => {
    expect(insertRefToken('Fasse "', 7, "@page://about ").text).toBe(
      'Fasse "@page://about ',
    );
  });

  it("prefixes a space where the token would land mid-word", () => {
    expect(insertRefToken("Summarize", 9, "@page://about ")).toEqual({
      text: "Summarize @page://about ",
      nextIndex: 24,
    });
  });

  it("inserts without a prefix after a space", () => {
    expect(insertRefToken("Summarize ", 10, "@page://about ").text).toBe(
      "Summarize @page://about ",
    );
  });

  it("inserts without a prefix at the start of the input", () => {
    expect(insertRefToken("", 0, "@page://about ").text).toBe(
      "@page://about ",
    );
  });

  it("returns the index behind the inserted token so a second insert follows it", () => {
    const { text, nextIndex } = insertRefToken("Compare", 7, "@page://a ");

    expect(insertRefToken(text, nextIndex, "@page://b ").text).toBe(
      "Compare @page://a @page://b ",
    );
  });
});
