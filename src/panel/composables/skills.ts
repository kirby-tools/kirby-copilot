import type { Skill } from "../types";
import { ref } from "kirbyuse";
import { createGlobalState } from "./state";

const SKILL_REF_TOKEN_REGEX_SOURCE = String.raw`@skill://([\w\-]+)`;
/**
 * Matches `@skill://<query>` at the end of a text slice, preceded by start,
 * whitespace, or an opening bracket. The lookbehind is zero-width so callers
 * can compute `from = cursor - match[0].length`. Caller must pass the slice
 * from block-start to caret.
 */
const SKILL_TRIGGER_REGEX_SOURCE = String.raw`(?<=^|[\s([{])@skill:\/\/([\w\-]*)$`;

export function createSkillRefTokenRegex() {
  return new RegExp(SKILL_REF_TOKEN_REGEX_SOURCE, "g");
}

export function createSkillTriggerRegex() {
  return new RegExp(SKILL_TRIGGER_REGEX_SOURCE);
}

export function extractSkillRefIds(text: string) {
  const ids: string[] = [];

  for (const match of text.matchAll(createSkillRefTokenRegex())) {
    if (match[1]) ids.push(match[1]);
  }

  return ids;
}

/**
 * Removes `@skill://<id>` tokens and their trailing horizontal whitespace.
 * The trailing `[ \t]*` is what keeps `foo @skill://x bar` from collapsing
 * to `foobar` once the token is gone.
 */
export function stripSkillRefTokens(text: string): string {
  return text.replace(/@skill:\/\/[\w-]+[ \t]*/g, "");
}

export function filterSkills(skills: readonly Skill[], query: string) {
  if (!query) return skills;
  const lowercaseQuery = query.toLowerCase();

  return skills.filter(
    (skill) =>
      skill.id.toLowerCase().includes(lowercaseQuery) ||
      skill.label.toLowerCase().includes(lowercaseQuery),
  );
}

export const useSkills = createGlobalState(() => {
  const skills = ref<Skill[]>([]);

  function setConfigSkills(input: Skill[]) {
    const seen = new Set<string>();
    const result: Skill[] = [];

    for (const skill of input) {
      if (seen.has(skill.id)) continue;
      seen.add(skill.id);
      result.push(skill);
    }

    skills.value = result;
  }

  function hasSkill(id: string) {
    return skills.value.some((skill) => skill.id === id);
  }

  function getActiveSkills(tokenIds: string[]) {
    const seen = new Set<string>();
    const result: Skill[] = [];

    for (const id of tokenIds) {
      if (!id || seen.has(id)) continue;
      seen.add(id);

      const skill = skills.value.find((skill) => skill.id === id);
      if (!skill) continue;

      result.push(skill);
    }

    return result;
  }

  return {
    skills,
    setConfigSkills,
    hasSkill,
    getActiveSkills,
  };
});
