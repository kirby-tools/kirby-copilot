import type { Skill } from "../../../src/panel/types";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  createSkillRefTokenRegex,
  createSkillTriggerRegex,
  extractSkillRefIds,
  stripSkillRefTokens,
  useSkills,
} from "../../../src/panel/composables/skills";

vi.mock("kirbyuse", async () => {
  const { baseKirbyuseMock } = await import("../helpers/mock-kirbyuse");
  return baseKirbyuseMock();
});

function skill(input: Partial<Skill> & Pick<Skill, "id">): Skill {
  return {
    label: `${input.id} label`,
    instructions: `${input.id} instructions`,
    ...input,
  };
}

beforeEach(() => {
  useSkills().setConfigSkills([]);
});

describe("setConfigSkills", () => {
  it("stores valid skills", () => {
    const { setConfigSkills, skills } = useSkills();
    setConfigSkills([skill({ id: "a" }), skill({ id: "b" })]);

    expect(skills.value).toHaveLength(2);
    expect(skills.value[0]).toMatchObject({
      id: "a",
      label: "a label",
      instructions: "a instructions",
    });
  });

  it("dedupes by id, keeping the first occurrence", () => {
    const { setConfigSkills, skills } = useSkills();
    setConfigSkills([
      skill({ id: "x", label: "First" }),
      skill({ id: "x", label: "Second" }),
    ]);

    expect(skills.value).toHaveLength(1);
    expect(skills.value[0]?.label).toBe("First");
  });

  it("replaces the prior set rather than merging", () => {
    const { setConfigSkills, skills } = useSkills();
    setConfigSkills([skill({ id: "a" }), skill({ id: "b" })]);
    setConfigSkills([skill({ id: "c" })]);

    expect(skills.value.map((s) => s.id)).toEqual(["c"]);
  });
});

describe("hasSkill", () => {
  it("returns true for a configured id", () => {
    const { setConfigSkills, hasSkill } = useSkills();
    setConfigSkills([skill({ id: "a" })]);

    expect(hasSkill("a")).toBe(true);
  });

  it("returns false for an unknown id", () => {
    const { hasSkill } = useSkills();

    expect(hasSkill("missing")).toBe(false);
  });
});

describe("getActiveSkills", () => {
  it("resolves tokens in the order they were passed", () => {
    const { setConfigSkills, getActiveSkills } = useSkills();
    setConfigSkills([skill({ id: "a" }), skill({ id: "b" })]);

    expect(getActiveSkills(["b", "a"]).map((s) => s.id)).toEqual(["b", "a"]);
  });

  it("dedupes repeated token ids", () => {
    const { setConfigSkills, getActiveSkills } = useSkills();
    setConfigSkills([skill({ id: "a" })]);

    expect(getActiveSkills(["a", "a"]).map((s) => s.id)).toEqual(["a"]);
  });

  it("drops unknown token ids without throwing", () => {
    const { setConfigSkills, getActiveSkills } = useSkills();
    setConfigSkills([skill({ id: "known" })]);

    expect(getActiveSkills(["known", "typo"]).map((s) => s.id)).toEqual([
      "known",
    ]);
  });

  it("returns an empty array for an empty token list", () => {
    const { setConfigSkills, getActiveSkills } = useSkills();
    setConfigSkills([skill({ id: "a" })]);

    expect(getActiveSkills([])).toEqual([]);
  });
});

describe("createSkillRefTokenRegex", () => {
  it("returns correct results across interleaved usages", () => {
    // Protects against regressing to a shared-instance regex whose mutable
    // `lastIndex` would make a second matchAll skip or start mid-string.
    const first = createSkillRefTokenRegex();
    Array.from("@skill://foo".matchAll(first));

    const second = createSkillRefTokenRegex();
    expect(
      Array.from("@skill://bar and @skill://baz".matchAll(second), (m) => m[1]),
    ).toEqual(["bar", "baz"]);
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

describe("createSkillTriggerRegex", () => {
  it.each([
    { position: "start of input", input: "@skill://foo", expected: "foo" },
    {
      position: "after whitespace",
      input: "hello @skill://foo",
      expected: "foo",
    },
    {
      position: "after opening paren",
      input: "(@skill://foo",
      expected: "foo",
    },
    {
      position: "after opening bracket",
      input: "[@skill://bar",
      expected: "bar",
    },
    {
      position: "after opening brace",
      input: "{@skill://baz",
      expected: "baz",
    },
  ])("matches at $position", ({ input, expected }) => {
    expect(input.match(createSkillTriggerRegex())?.[1]).toBe(expected);
  });

  it("matches an empty query right after the prefix", () => {
    expect("hello @skill://".match(createSkillTriggerRegex())?.[1]).toBe("");
  });

  it("does not match when embedded in a word", () => {
    expect("foo@skill://bar".match(createSkillTriggerRegex())).toBeNull();
    expect("x@skill://".match(createSkillTriggerRegex())).toBeNull();
  });
});

describe("stripSkillRefTokens", () => {
  it("eats a single horizontal space after the token so neighbors don't collapse", () => {
    expect(stripSkillRefTokens("foo @skill://brand bar")).toBe("foo bar");
  });

  it("preserves newlines after a token (only horizontal whitespace is eaten)", () => {
    expect(stripSkillRefTokens("@skill://brand\nthe rest")).toBe("\nthe rest");
  });
});
