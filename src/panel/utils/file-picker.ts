export function openFilePicker({
  accept = "*",
  multiple = true,
}: {
  accept?: string;
  multiple?: boolean;
} = {}): Promise<File[]> {
  return new Promise<File[]>((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.classList.add("sr-only");
    input.accept = accept;
    input.multiple = multiple;

    const cleanup = () => {
      input.remove();
    };

    input.addEventListener(
      "change",
      (event) => {
        const files = (event.target as HTMLInputElement)?.files;
        resolve(files ? [...files] : []);
        cleanup();
      },
      { once: true },
    );

    // Handle cancel (focus returns to window without selection).
    window.addEventListener(
      "focus",
      () => {
        // Delay to allow change event to fire first if files were selected.
        setTimeout(() => {
          if (document.body.contains(input)) {
            resolve([]);
            cleanup();
          }
        }, 300);
      },
      { once: true },
    );

    document.body.appendChild(input);
    input.click();
  });
}
