import { useContent } from "kirbyuse";

export function createContentContext() {
  const { currentContent } = useContent();
  const context = {
    ...currentContent.value,
    title: window.panel.view.title,
  };

  // JSON-encode non-primitive values
  return Object.fromEntries(
    Object.entries(context).map(([key, value]) => [
      key,
      Array.isArray(value) || (typeof value === "object" && value !== null)
        ? JSON.stringify(value)
        : value,
    ]),
  );
}
