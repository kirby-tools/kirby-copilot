export function useCompatibility() {
  if (!window.panel.$api) {
    throw new Error("Kirby Copilot requires Kirby 4");
  }
}
