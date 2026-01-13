import type { Ref } from "vue";
import { ref, usePanel } from "kirbyuse";
import { generateRandomId } from "utilful";
import { getHashedStorageKey } from "../utils";

export interface PromptTemplate {
  id: string;
  name: string;
  prompt: string;
  createdAt: number;
}

const TEMPLATE_LIMIT = 50;

// Singleton state
let templates: Ref<PromptTemplate[]>;
let storageKey: string;

const FORMATTING_PRESERVATION_INSTRUCTIONS: Record<string, string> = {
  en: "IMPORTANT: Preserve all formatting (bold, italic, links, code, headings, lists, etc.) exactly as in the original.",
  de: "WICHTIG: Bewahre alle Formatierungen (fett, kursiv, Links, Code, Überschriften, Listen usw.) exakt wie im Original.",
  fr: "IMPORTANT : Conservez toutes les mises en forme (gras, italique, liens, code, titres, listes, etc.) exactement comme dans l'original.",
  nl: "BELANGRIJK: Behoud alle opmaak (vet, cursief, links, code, koppen, lijsten, enz.) exact zoals in het origineel.",
};

const DEFAULT_TEMPLATES_BY_LANGUAGE: Record<
  string,
  {
    name: string;
    prompt: string;
  }[]
> = {
  en: [
    {
      name: "Fix Grammar & Spelling",
      prompt: `Fix all spelling and grammar errors in the given text. ${FORMATTING_PRESERVATION_INSTRUCTIONS.en} Only output the corrected text, nothing else.`,
    },
    {
      name: "Make Concise",
      prompt: `Make the given text more concise by removing unnecessary words while keeping the meaning intact. ${FORMATTING_PRESERVATION_INSTRUCTIONS.en} Only output the reduced text, nothing else.`,
    },
    {
      name: "Simplify",
      prompt: `Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${FORMATTING_PRESERVATION_INSTRUCTIONS.en} Only output the simplified text, nothing else.`,
    },
    {
      name: "Extend",
      prompt: `Extend the given text with more details, examples, or explanations while maintaining the same style and tone. ${FORMATTING_PRESERVATION_INSTRUCTIONS.en} Only output the extended text, nothing else.`,
    },
    {
      name: "Summarize",
      prompt:
        "Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.",
    },
  ],
  de: [
    {
      name: "Grammatik & Rechtschreibung korrigieren",
      prompt: `Korrigiere alle Rechtschreib- und Grammatikfehler im gegebenen Text. ${FORMATTING_PRESERVATION_INSTRUCTIONS.de} Gib nur den korrigierten Text aus, sonst nichts.`,
    },
    {
      name: "Kürzen",
      prompt: `Mache den gegebenen Text prägnanter, indem du unnötige Wörter entfernst, aber die Bedeutung beibehältst. ${FORMATTING_PRESERVATION_INSTRUCTIONS.de} Gib nur den gekürzten Text aus, sonst nichts.`,
    },
    {
      name: "Vereinfachen",
      prompt: `Vereinfache den gegebenen Text, um ihn verständlicher zu machen, indem du einfachere Wörter und kürzere Sätze verwendest. ${FORMATTING_PRESERVATION_INSTRUCTIONS.de} Gib nur den vereinfachten Text aus, sonst nichts.`,
    },
    {
      name: "Erweitern",
      prompt: `Erweitere den gegebenen Text mit mehr Details, Beispielen oder Erklärungen, während du den gleichen Stil und Ton beibehältst. ${FORMATTING_PRESERVATION_INSTRUCTIONS.de} Gib nur den erweiterten Text aus, sonst nichts.`,
    },
    {
      name: "Zusammenfassen",
      prompt:
        "Fasse den gegebenen Text prägnant zusammen und behalte dabei die wichtigsten Punkte bei. Gib nur die Zusammenfassung aus, sonst nichts.",
    },
  ],
  fr: [
    {
      name: "Corriger grammaire et orthographe",
      prompt: `Corrigez toutes les erreurs d'orthographe et de grammaire dans le texte donné. ${FORMATTING_PRESERVATION_INSTRUCTIONS.fr} N'affichez que le texte corrigé, rien d'autre.`,
    },
    {
      name: "Rendre concis",
      prompt: `Rendez le texte donné plus concis en supprimant les mots inutiles tout en conservant le sens. ${FORMATTING_PRESERVATION_INSTRUCTIONS.fr} N'affichez que le texte réduit, rien d'autre.`,
    },
    {
      name: "Simplifier",
      prompt: `Simplifiez le texte donné pour le rendre plus facile à comprendre, en utilisant des mots plus simples et des phrases plus courtes. ${FORMATTING_PRESERVATION_INSTRUCTIONS.fr} N'affichez que le texte simplifié, rien d'autre.`,
    },
    {
      name: "Développer",
      prompt: `Développez le texte donné avec plus de détails, d'exemples ou d'explications tout en conservant le même style et le même ton. ${FORMATTING_PRESERVATION_INSTRUCTIONS.fr} N'affichez que le texte développé, rien d'autre.`,
    },
    {
      name: "Résumer",
      prompt:
        "Résumez le texte donné de manière concise tout en conservant les points clés. N'affichez que le résumé, rien d'autre.",
    },
  ],
  nl: [
    {
      name: "Grammatica & spelling corrigeren",
      prompt: `Corrigeer alle spelling- en grammaticafouten in de gegeven tekst. ${FORMATTING_PRESERVATION_INSTRUCTIONS.nl} Geef alleen de gecorrigeerde tekst weer, niets anders.`,
    },
    {
      name: "Beknopter maken",
      prompt: `Maak de gegeven tekst beknopter door onnodige woorden te verwijderen terwijl de betekenis behouden blijft. ${FORMATTING_PRESERVATION_INSTRUCTIONS.nl} Geef alleen de verkorte tekst weer, niets anders.`,
    },
    {
      name: "Vereenvoudigen",
      prompt: `Vereenvoudig de gegeven tekst om deze gemakkelijker te begrijpen, door eenvoudigere woorden en kortere zinnen te gebruiken. ${FORMATTING_PRESERVATION_INSTRUCTIONS.nl} Geef alleen de vereenvoudigde tekst weer, niets anders.`,
    },
    {
      name: "Uitbreiden",
      prompt: `Breid de gegeven tekst uit met meer details, voorbeelden of uitleg terwijl dezelfde stijl en toon behouden blijven. ${FORMATTING_PRESERVATION_INSTRUCTIONS.nl} Geef alleen de uitgebreide tekst weer, niets anders.`,
    },
    {
      name: "Samenvatten",
      prompt:
        "Vat de gegeven tekst beknopt samen terwijl de belangrijkste punten behouden blijven. Geef alleen de samenvatting weer, niets anders.",
    },
  ],
};

function getDefaultTemplates(): PromptTemplate[] {
  const { user } = usePanel();
  const templates =
    DEFAULT_TEMPLATES_BY_LANGUAGE[user.language!] ||
    DEFAULT_TEMPLATES_BY_LANGUAGE.en!;

  return templates.map((template) => ({
    id: generateRandomId(),
    ...template,
    createdAt: Date.now(),
  }));
}

export function usePromptTemplates() {
  // Initialize singleton state only once
  if (!templates) {
    storageKey = getHashedStorageKey("templates", window.location.hostname);
    const storedTemplates = localStorage.getItem(storageKey);

    const initialTemplates: PromptTemplate[] = storedTemplates
      ? JSON.parse(storedTemplates)
      : getDefaultTemplates();

    templates = ref<PromptTemplate[]>(initialTemplates);

    // Save defaults to storage if this is the first time
    if (!storedTemplates) {
      localStorage.setItem(storageKey, JSON.stringify(initialTemplates));
    }
  }

  function saveTemplates() {
    localStorage.setItem(storageKey, JSON.stringify(templates.value));
  }

  function addTemplate(name: string, prompt: string) {
    if (!name || !prompt) return;

    const trimmedName = name.trim();
    const trimmedPrompt = prompt.trim();

    if (!trimmedName || !trimmedPrompt) return;

    const template: PromptTemplate = {
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

  function updateTemplate(id: string, updates: Partial<PromptTemplate>) {
    const index = templates.value.findIndex((template) => template.id === id);
    if (index === -1) return false;

    templates.value[index] = {
      ...templates.value[index]!,
      ...updates,
    };

    saveTemplates();
    return true;
  }

  function deleteTemplate(id: string) {
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

  function setTemplates(newTemplates: { name: string; prompt: string }[]) {
    const existingTemplates = [...templates.value];
    const result: PromptTemplate[] = [];

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
        const existing = existingTemplates.splice(existingIndex, 1)[0]!;
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

  function getTemplate(id: string) {
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
