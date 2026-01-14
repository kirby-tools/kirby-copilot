import type { PromptTemplate, PromptTemplateInput } from "../types";
import { computed, reactive, usePanel } from "kirbyuse";
import { generateRandomId } from "utilful";
import { DEFAULT_PROMPT_TEMPLATES } from "../constants";
import { getHashedStorageKey } from "../utils/shared";

const TEMPLATE_LIMIT = 50;

let isInitialized = false;
let hasStoredTemplates = false;
let storageKey = "";

const store = reactive({
  templates: [] as PromptTemplate[],
  configTemplates: [] as PromptTemplate[],
});

export function usePromptTemplates() {
  // Initialize store only once
  if (!isInitialized) {
    isInitialized = true;
    storageKey = getHashedStorageKey("templates", window.location.hostname);
    const storedTemplates = localStorage.getItem(storageKey);
    hasStoredTemplates = !!storedTemplates;

    let initialTemplates: PromptTemplate[];

    if (storedTemplates) {
      initialTemplates = migrateTemplates(storedTemplates);
      // Persist migrated templates back to storage
      localStorage.setItem(storageKey, JSON.stringify(initialTemplates));
    } else {
      initialTemplates = getDefaultTemplates();
    }

    store.templates = initialTemplates;
    store.configTemplates = [];
  }

  const allTemplates = computed(() => [
    ...store.configTemplates,
    ...store.templates,
  ]);

  function saveTemplates() {
    localStorage.setItem(storageKey, JSON.stringify(store.templates));
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

    store.templates.unshift(template);

    // Limit templates count
    if (store.templates.length > TEMPLATE_LIMIT) {
      store.templates.splice(TEMPLATE_LIMIT);
    }

    saveTemplates();
    return template;
  }

  function updateTemplate(id: string, updates: Partial<PromptTemplate>) {
    const index = store.templates.findIndex((template) => template.id === id);
    if (index === -1) return false;

    // Use Object.assign for Vue 2 reactivity on object properties
    Object.assign(store.templates[index]!, updates);

    saveTemplates();
    return true;
  }

  function deleteTemplate(id: string) {
    const index = store.templates.findIndex((template) => template.id === id);
    if (index === -1) return false;

    store.templates.splice(index, 1);
    saveTemplates();
    return true;
  }

  function clearTemplates() {
    store.templates = [];
    saveTemplates();
  }

  function setTemplates(newTemplates: PromptTemplateInput[]) {
    const existingTemplates = [...store.templates];
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
        // Preserve existing metadata, update content
        const selectedTemplate = existingTemplates.splice(existingIndex, 1)[0]!;
        result.push({
          ...selectedTemplate,
          label: trimmedLabel,
          prompt: trimmedPrompt,
        });
      } else {
        // Create new template
        result.push({
          id: generateRandomId(),
          label: trimmedLabel,
          prompt: trimmedPrompt,
          createdAt: Date.now(),
        });
      }
    }

    store.templates = result.slice(0, TEMPLATE_LIMIT);
    saveTemplates();
  }

  function setConfigTemplates(newTemplates: PromptTemplateInput[]) {
    store.configTemplates = newTemplates.map((template, index) => ({
      ...template,
      id: `config-${index}`,
      createdAt: 0,
      readOnly: true,
    }));

    // Clear default templates if config templates are provided and user hasn't customized
    if (newTemplates.length > 0 && !hasStoredTemplates) {
      store.templates = [];
      saveTemplates();
    }
  }

  function getTemplate(id: string) {
    return allTemplates.value.find((template) => template.id === id);
  }

  return {
    templates: computed(() => store.templates),
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

/**
 * Migrates legacy templates from `name` to `label` property.
 *
 * @todo Remove in a future version after sufficient migration period.
 */
function migrateTemplates(data: string): PromptTemplate[] {
  return JSON.parse(data).map((template: Record<string, unknown>) => {
    if ("name" in template && !("label" in template)) {
      const { name, ...rest } = template;
      return { ...rest, label: name };
    }
    return template;
  });
}
