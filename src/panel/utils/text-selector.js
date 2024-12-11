export class TextSelector {
  static getSelectedText() {
    // First, try to get selection from active element (input/textarea)
    const activeElement = document.activeElement;
    if (this.isEditableElement(activeElement)) {
      return this.getInputSelection(activeElement);
    }

    // Then, try to get general window selection
    return this.getWindowSelection();
  }

  static isEditableElement(element) {
    return (
      element &&
      (element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement ||
        element.hasAttribute("contenteditable"))
    );
  }

  static getInputSelection(element) {
    const start = element.selectionStart;
    const end = element.selectionEnd;

    // Handle contenteditable elements
    if (element.hasAttribute("contenteditable")) {
      return this.getWindowSelection();
    }

    // Handle input and textarea elements
    if (start !== undefined && end !== undefined) {
      return element.value.substring(start, end);
    }

    return "";
  }

  static getWindowSelection() {
    const selection = window.getSelection();
    return selection?.toString() ?? "";
  }
}
