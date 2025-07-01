import PromptDialog from "./components/Dialogs/Prompt.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import CopilotSection from "./components/Sections/Copilot.vue";
import CopilotButton from "./components/ViewButtons/CopilotButton.vue";
import { icons } from "./config/icons";
import { textareaButtons } from "./config/textareaButtons";
import { writerMarks } from "./config/writerMarks";
import { legacyViewButtonMixin } from "./utils/legacy";
import "./index.css";

window.panel.plugin("johannschopplich/copilot", {
  viewButtons: {
    copilot: CopilotButton,
  },
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
  icons,
  use: [legacyViewButtonMixin],
});
