import type { PromptTemplate, PromptTemplateInput } from "../types";
import { computed, reactive, usePanel } from "kirbyuse";
import { generateRandomId } from "utilful";
import { DEFAULT_PROMPT_TEMPLATES } from "../constants";
import { getHashedStorageKey } from "../utils/shared";
import { createGlobalState } from "./state";

const TEMPLATE_LIMIT = 50;

const usePromptTemplatesState = createGlobalState(() => {
  const storageKey = getHashedStorageKey("templates", window.location.hostname);
  const storedTemplates = localStorage.getItem(storageKey);
  const hasStoredTemplates = !!storedTemplates;

  const initialTemplates: PromptTemplate[] = storedTemplates
    ? JSON.parse(storedTemplates)
    : getDefaultTemplates();

  const state = reactive({
    templates: initialTemplates,
    configTemplates: [] as PromptTemplate[],
  });

  return {
    state,
    storageKey,
    hasStoredTemplates,
  };
});

export function usePromptTemplates() {
  const { state, storageKey, hasStoredTemplates } = usePromptTemplatesState();

  const allTemplates = computed(() => [
    ...state.configTemplates,
    ...state.templates,
  ]);

  function saveTemplates() {
    localStorage.setItem(storageKey, JSON.stringify(state.templates));
  }

  function addTemplate(label: string, prompt: string) {
    const trimmedLabel = label?.trim();
    const trimmedPrompt = prompt?.trim();

    if (!trimmedLabel || !trimmedPrompt) return;

    const template: PromptTemplate = {
      id: generateRandomId(),
      label: trimmedLabel,
      prompt: trimmedPrompt,
      createdAt: Date.now(),
    };

    state.templates.unshift(template);

    if (state.templates.length > TEMPLATE_LIMIT) {
      state.templates.splice(TEMPLATE_LIMIT);
    }

    saveTemplates();
    return template;
  }

  function updateTemplate(id: string, updates: Partial<PromptTemplate>) {
    const index = state.templates.findIndex((template) => template.id === id);
    if (index === -1) return false;

    // `Object.assign` preserves Vue 2 reactivity on the mutated object
    Object.assign(state.templates[index]!, updates);

    saveTemplates();
    return true;
  }

  function deleteTemplate(id: string) {
    const index = state.templates.findIndex((template) => template.id === id);
    if (index === -1) return false;

    state.templates.splice(index, 1);
    saveTemplates();
    return true;
  }

  function clearTemplates() {
    state.templates = [];
    saveTemplates();
  }

  function setTemplates(newTemplates: PromptTemplateInput[]) {
    const existingTemplates = [...state.templates];
    const result: PromptTemplate[] = [];

    for (const newTemplate of newTemplates) {
      if (!newTemplate.label || !newTemplate.prompt) continue;

      const trimmedLabel = newTemplate.label.trim();
      const trimmedPrompt = newTemplate.prompt.trim();
      if (!trimmedLabel || !trimmedPrompt) continue;

      // Try to find existing template by label first, then by prompt
      let existingIndex = existingTemplates.findIndex(
        (template) => template.label === trimmedLabel,
      );
      if (existingIndex === -1) {
        existingIndex = existingTemplates.findIndex(
          (template) => template.prompt === trimmedPrompt,
        );
      }

      if (existingIndex !== -1) {
        const selectedTemplate = existingTemplates.splice(existingIndex, 1)[0]!;
        result.push({
          ...selectedTemplate,
          label: trimmedLabel,
          prompt: trimmedPrompt,
        });
      } else {
        result.push({
          id: generateRandomId(),
          label: trimmedLabel,
          prompt: trimmedPrompt,
          createdAt: Date.now(),
        });
      }
    }

    state.templates = result.slice(0, TEMPLATE_LIMIT);
    saveTemplates();
  }

  function setConfigTemplates(newTemplates: PromptTemplateInput[]) {
    state.configTemplates = newTemplates.map((template, index) => ({
      ...template,
      id: `config-${index}`,
      createdAt: 0,
      readOnly: true,
    }));

    if (newTemplates.length > 0 && !hasStoredTemplates) {
      state.templates = [];
    }
  }

  function getTemplate(id: string) {
    return allTemplates.value.find((template) => template.id === id);
  }

  return {
    templates: computed(() => state.templates),
    allTemplates,
    addTemplate,
    updateTemplate,
    deleteTemplate,
    clearTemplates,
    setTemplates,
    setConfigTemplates,
    getTemplate,
  };
}

function getDefaultTemplates(): PromptTemplate[] {
  const { user } = usePanel();
  const templates =
    DEFAULT_PROMPT_TEMPLATES[user.language!] || DEFAULT_PROMPT_TEMPLATES.en!;

  return templates.map((template) => ({
    id: generateRandomId(),
    ...template,
    createdAt: Date.now(),
  }));
}
