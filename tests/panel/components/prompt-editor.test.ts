import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

const { useSkills } = await import("../../../src/panel/composables/skills");
const {
  createPageRefTokenRegex,
  createSkillRefTokenRegex,
  extractPageRefIds,
  extractSkillRefIds,
} = await import("../../../src/panel/components/Ui/prompt-editor");

beforeEach(() => {
  useSkills().setConfigSkills([]);
});

describe("createSkillRefTokenRegex", () => {
  it("returns a fresh global regex per call so matchAll state can't leak", () => {
    const a = createSkillRefTokenRegex();
    const b = createSkillRefTokenRegex();

    expect(a).not.toBe(b);
    expect(a.global).toBe(true);
  });

  it("matches slug characters: letters, digits, underscore, hyphen", () => {
    const regex = createSkillRefTokenRegex();
    const matches = Array.from(
      "@skill://brand_voice and @skill://be-brief-v2 and @skill://X9".matchAll(
        regex,
      ),
      (m) => m[1],
    );

    expect(matches).toEqual(["brand_voice", "be-brief-v2", "X9"]);
  });

  it("does not match when prefix is missing", () => {
    expect(createSkillRefTokenRegex().test("skill://brand-voice")).toBe(false);
  });

  it("does not match a skill id containing a slash", () => {
    const ids = Array.from(
      "@skill://foo/bar".matchAll(createSkillRefTokenRegex()),
      (m) => m[1],
    );

    // Only the first segment before the slash is captured (consistent with PHP validation)
    expect(ids).toEqual(["foo"]);
  });
});

describe("createPageRefTokenRegex", () => {
  it("captures nested paths with slashes and hyphens", () => {
    const regex = createPageRefTokenRegex();
    const ids = Array.from(
      "see @page://blog/2024-02-01 and @page://about".matchAll(regex),
      (m) => m[1],
    );

    expect(ids).toEqual(["blog/2024-02-01", "about"]);
  });
});

describe("extractSkillRefIds", () => {
  it("returns an empty array when no tokens are present", () => {
    expect(extractSkillRefIds("Nothing to see here")).toEqual([]);
  });

  it("returns ids in document order, preserving duplicates for caller dedup", () => {
    expect(
      extractSkillRefIds(
        "@skill://brand-voice then @skill://be-brief and @skill://brand-voice again",
      ),
    ).toEqual(["brand-voice", "be-brief", "brand-voice"]);
  });

  it("ignores placeholder and page tokens", () => {
    expect(
      extractSkillRefIds("{title} @page://about @skill://brand-voice"),
    ).toEqual(["brand-voice"]);
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
