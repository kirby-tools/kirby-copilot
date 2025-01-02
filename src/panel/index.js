import PromptDialog from "./components/Dialogs/Prompt.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import CopilotSection from "./components/Sections/Copilot.vue";
import { textareaButtons } from "./config/textareaButtons";
import { writerMarks } from "./config/writerMarks";
import "./index.css";

window.panel.plugin("johannschopplich/copilot", {
  components: {
    "k-copilot-prompt-dialog": PromptDialog,
  },
  sections: {
    copilot: CopilotSection,
  },
  fields: {
    // eslint-disable-next-line no-undef
    ...(__PLAYGROUND__ && {
      "playground-api-key": PlaygroundApiKeyField,
    }),
  },
  textareaButtons,
  writerMarks,
});
