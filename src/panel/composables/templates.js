import { ref } from "kirbyuse";
import { generateRandomId } from "utilful";
import { getHashedStorageKey } from "../utils/storage";

const TEMPLATE_LIMIT = 50;
const MARKDOWN_PRESERVATION_INSTRUCTION =
  "IMPORTANT: Preserve all Markdown formatting (bold, italic, links, code, headings, lists, etc.) exactly as in the original.";

const DEFAULT_TEMPLATES = [
  {
    name: "Fix Grammar & Spelling",
    prompt: `Fix all spelling and grammar errors in the given text. ${MARKDOWN_PRESERVATION_INSTRUCTION} Only output the corrected text, nothing else.`,
  },
  {
    name: "Make Concise",
    prompt: `Make the given text more concise by removing unnecessary words while keeping the meaning intact. ${MARKDOWN_PRESERVATION_INSTRUCTION} Only output the reduced text, nothing else.`,
  },
  {
    name: "Simplify",
    prompt: `Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${MARKDOWN_PRESERVATION_INSTRUCTION} Only output the simplified text, nothing else.`,
  },
  {
    name: "Extend",
    prompt: `Extend the given text with more details, examples, or explanations while maintaining the same style and tone. ${MARKDOWN_PRESERVATION_INSTRUCTION} Only output the extended text, nothing else.`,
  },
  {
    name: "Summarize",
    prompt:
      "Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.",
  },
];

export function usePromptTemplates() {
  const storageKey = getHashedStorageKey("templates", window.location.hostname);
  const storedTemplates = localStorage.getItem(storageKey);

  const initialTemplates = storedTemplates
    ? JSON.parse(storedTemplates)
    : DEFAULT_TEMPLATES.map((template) => ({
        id: generateRandomId(),
        ...template,
        createdAt: Date.now(),
      }));

  const templates = ref(initialTemplates);

  // Save defaults to storage if this is the first time
  if (!storedTemplates) {
    localStorage.setItem(storageKey, JSON.stringify(initialTemplates));
  }

  function saveTemplates() {
    localStorage.setItem(storageKey, JSON.stringify(templates.value));
  }

  function addTemplate(name, prompt) {
    if (!name || !prompt) return;

    const trimmedName = name.trim();
    const trimmedPrompt = prompt.trim();

    if (!trimmedName || !trimmedPrompt) return;

    const template = {
      id: generateRandomId(),
      name: trimmedName,
      prompt: trimmedPrompt,
      createdAt: Date.now(),
    };

    templates.value.unshift(template);

    // Limit templates count
    if (templates.value.length > TEMPLATE_LIMIT) {
      templates.value = templates.value.slice(0, TEMPLATE_LIMIT);
    }

    saveTemplates();
    return template;
  }

  function updateTemplate(id, updates) {
    const index = templates.value.findIndex((template) => template.id === id);
    if (index === -1) return false;

    templates.value[index] = {
      ...templates.value[index],
      ...updates,
    };

    saveTemplates();
    return true;
  }

  function deleteTemplate(id) {
    const index = templates.value.findIndex((template) => template.id === id);
    if (index === -1) return false;

    templates.value.splice(index, 1);
    saveTemplates();
    return true;
  }

  function clearTemplates() {
    templates.value = [];
    saveTemplates();
  }

  function setTemplates(newTemplates) {
    const existingTemplates = [...templates.value];
    const result = [];

    for (const newTemplate of newTemplates) {
      if (!newTemplate.name || !newTemplate.prompt) continue;

      const trimmedName = newTemplate.name.trim();
      const trimmedPrompt = newTemplate.prompt.trim();
      if (!trimmedName || !trimmedPrompt) continue;

      // Try to find existing template by name first, then by prompt
      let existingIndex = existingTemplates.findIndex(
        (t) => t.name === trimmedName,
      );
      if (existingIndex === -1) {
        existingIndex = existingTemplates.findIndex(
          (t) => t.prompt === trimmedPrompt,
        );
      }

      if (existingIndex !== -1) {
        // Preserve existing metadata, update content
        const existing = existingTemplates.splice(existingIndex, 1)[0];
        result.push({
          ...existing,
          name: trimmedName,
          prompt: trimmedPrompt,
        });
      } else {
        // Create new template
        result.push({
          id: generateRandomId(),
          name: trimmedName,
          prompt: trimmedPrompt,
          createdAt: Date.now(),
        });
      }
    }

    templates.value = result.slice(0, TEMPLATE_LIMIT);
    saveTemplates();
  }

  function getTemplate(id) {
    return templates.value.find((template) => template.id === id);
  }

  return {
    templates,
    addTemplate,
    updateTemplate,
    deleteTemplate,
    clearTemplates,
    setTemplates,
    getTemplate,
  };
}
