import { ref } from "kirbyuse";
import { getHashedStorageKey } from "../utils/storage";

const MAX_HISTORY = 50;

export function useGenerationHistory() {
  const storageKey = getHashedStorageKey("history", window.location.hostname);
  const history = ref(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  const lastPrompt = ref("");
  const currentIndex = ref(-1);

  function saveHistory() {
    localStorage.setItem(storageKey, JSON.stringify(history.value));
  }

  function addToHistory(prompt) {
    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return;
    }

    const trimmedPrompt = prompt.trim();

    // Remove duplicate if exists (move to front)
    const existingIndex = history.value.indexOf(trimmedPrompt);
    if (existingIndex !== -1) {
      history.value.splice(existingIndex, 1);
    }

    history.value.unshift(trimmedPrompt);

    // Limit history size
    if (history.value.length > MAX_HISTORY) {
      history.value = history.value.slice(0, MAX_HISTORY);
    }

    saveHistory();
    currentIndex.value = -1;
  }

  function navigateHistory(direction) {
    if (history.value.length === 0) return;

    if (direction === "up") {
      if (currentIndex.value + 1 < history.value.length) {
        currentIndex.value++;
        return history.value[currentIndex.value];
      }
    } else if (direction === "down") {
      if (currentIndex.value > 0) {
        currentIndex.value--;
        return history.value[currentIndex.value];
      } else if (currentIndex.value === 0) {
        currentIndex.value = -1;
        return lastPrompt.value;
      }
    }
  }

  function deleteEntry(prompt) {
    const index = history.value.indexOf(prompt);
    if (index === -1) return false;

    history.value.splice(index, 1);
    saveHistory();
    return true;
  }

  function clearHistory() {
    history.value = [];
    saveHistory();
    currentIndex.value = -1;
  }

  function getRecentEntries(limit = 10) {
    return history.value.slice(0, limit);
  }

  return {
    history,
    lastPrompt,
    currentIndex,
    addToHistory,
    navigateHistory,
    deleteEntry,
    clearHistory,
    getRecentEntries,
  };
}
