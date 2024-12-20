import CopilotSection from "./components/Copilot.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import PromptDialog from "./components/PromptDialog.vue";
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
