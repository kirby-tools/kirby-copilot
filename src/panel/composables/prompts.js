import { ref } from "kirbyuse";
import { STORAGE_KEY_PREFIX } from "../constants";

const STORAGE_KEY = `${STORAGE_KEY_PREFIX}promptHistory`;
const MAX_HISTORY = 50;

export function usePromptHistory() {
  const lastPrompt = ref("");
  let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  let currentIndex = -1;

  function addToHistory(prompt) {
    if (!prompt) return;

    // Remove duplicate if exists
    const index = history.indexOf(prompt);
    if (index !== -1) {
      history.splice(index, 1);
    }

    history.unshift(prompt);

    // Limit history size
    if (history.length > MAX_HISTORY) {
      history = history.slice(0, MAX_HISTORY);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    currentIndex = -1;
  }

  function navigateHistory(direction) {
    if (direction === "up") {
      if (currentIndex + 1 < history.length) {
        currentIndex++;
        return history[currentIndex];
      }
    } else if (direction === "down") {
      if (currentIndex > 0) {
        currentIndex--;
        return history[currentIndex];
      } else if (currentIndex === 0) {
        currentIndex = -1;
        return lastPrompt.value;
      }
    }
  }

  return {
    lastPrompt,
    addToHistory,
    navigateHistory,
  };
}
