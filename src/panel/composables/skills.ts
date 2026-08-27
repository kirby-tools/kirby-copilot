import type { Skill } from "../types";
import { ref } from "kirbyuse";
import {
  createRefTokenRegex,
  extractRefIds,
  REF_TOKEN_BOUNDARY_SOURCE,
} from "../utils/reference-tokens";
import { createGlobalState } from "./state";

// Single source for the skill id charset; must stay in sync with the PHP
// validation in `PanelContext::normalizeSkills` (`/^[\w\-]+$/`).
const SKILL_ID_CHARSET = String.raw`[\w\-]`;

/**
 * Matches `@skill://<query>` at the end of a text slice, preceded by the
 * shared token boundary. The lookbehind is zero-width so callers can
 * compute `from = cursor - match[0].length`. Caller must pass the slice
 * from block-start to caret.
 */
const SKILL_TRIGGER_REGEX_SOURCE = String.raw`${REF_TOKEN_BOUNDARY_SOURCE}@skill:\/\/(${SKILL_ID_CHARSET}*)$`;

export function createSkillRefTokenRegex() {
  return createRefTokenRegex("skill", SKILL_ID_CHARSET);
}

export function createSkillTriggerRegex() {
  return new RegExp(SKILL_TRIGGER_REGEX_SOURCE);
}

export function extractSkillRefIds(text: string) {
  return extractRefIds(text, createSkillRefTokenRegex());
}

/**
 * Removes `@skill://<id>` tokens and their trailing horizontal whitespace.
 * The trailing `[ \t]*` is what keeps `foo @skill://x bar` from collapsing
 * to `foobar` once the token is gone.
 */
export function stripSkillRefTokens(text: string): string {
  return text.replace(
    new RegExp(
      String.raw`${REF_TOKEN_BOUNDARY_SOURCE}@skill://${SKILL_ID_CHARSET}+[ \t]*`,
      "g",
    ),
    "",
  );
}

/**
 * Resolves token ids against the configured skills, in token order and
 * deduped. Ids without a match come back separately so the caller can
 * report them.
 */
export function resolveSkillRefs(skills: readonly Skill[], tokenIds: string[]) {
  const seenIds = new Set<string>();
  const resolvedSkills: Skill[] = [];
  const unknownSkillIds: string[] = [];

  for (const id of tokenIds) {
    if (!id || seenIds.has(id)) continue;
    seenIds.add(id);

    const skill = skills.find((entry) => entry.id === id);

    if (skill) {
      resolvedSkills.push(skill);
    } else {
      unknownSkillIds.push(id);
    }
  }

  return { resolvedSkills, unknownSkillIds };
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
    const seenIds = new Set<string>();
    const uniqueSkills: Skill[] = [];

    for (const skill of input) {
      if (seenIds.has(skill.id)) continue;
      seenIds.add(skill.id);
      uniqueSkills.push(skill);
    }

    skills.value = uniqueSkills;
  }

  function hasSkill(id: string) {
    return skills.value.some((skill) => skill.id === id);
  }

  return {
    skills,
    setConfigSkills,
    hasSkill,
  };
});
