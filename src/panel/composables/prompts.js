import { ref } from "kirbyuse";
import { getHashedStorageKey } from "../utils/storage";

const MAX_HISTORY = 50;

export function usePromptHistory() {
  const storageKey = getHashedStorageKey("history", window.location.hostname);
  const history = ref(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  const lastPrompt = ref("");
  const currentIndex = ref(-1);

  function addToHistory(prompt) {
    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return;
    }

    const trimmedPrompt = prompt.trim();

    // Remove duplicate if exists
    const index = history.value.indexOf(trimmedPrompt);
    if (index !== -1) {
      history.value.splice(index, 1);
    }

    history.value.unshift(trimmedPrompt);

    // Limit history size
    if (history.value.length > MAX_HISTORY) {
      history.value = history.value.slice(0, MAX_HISTORY);
    }

    localStorage.setItem(storageKey, JSON.stringify(history.value));
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

  return {
    lastPrompt,
    currentIndex,
    addToHistory,
    navigateHistory,
  };
}
