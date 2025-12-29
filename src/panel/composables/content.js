import { useContent, usePanel } from "kirbyuse";

export function createContentContext() {
  const panel = usePanel();
  const { currentContent } = useContent();
  const context = {
    ...currentContent.value,
    title: panel.view.title,
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
