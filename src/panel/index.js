import PromptDialog from "./components/Dialogs/Prompt.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import CopilotSection from "./components/Sections/Copilot.vue";
import CopilotButton from "./components/ViewButtons/CopilotButton.vue";
import { icons } from "./config/icons";
import { copilot as copilotButton } from "./extensions/textarea-buttons/copilot";
import { copilot as copilotMark } from "./extensions/writer-marks/copilot";
import { copilotCompletion as copilotCompletionMark } from "./extensions/writer-marks/copilot-completion";
import { legacyViewButtonMixin } from "./utils/legacy";
import "./index.css";
import "./styles/copilot-completion.css";

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
  textareaButtons: {
    copilot: copilotButton,
  },
  writerMarks: {
    copilot: copilotMark,
    "copilot-completion": copilotCompletionMark,
  },
  icons,
  use: [legacyViewButtonMixin],
});
