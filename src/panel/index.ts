/* eslint-disable ts/ban-ts-comment */
// @ts-ignore - Vue component
import PromptDialog from "./components/Dialogs/Prompt.vue";
// @ts-ignore - Vue component
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
// @ts-ignore - Vue component
import CopilotSection from "./components/Sections/Copilot.vue";
// @ts-ignore - Vue component
import CopilotButton from "./components/ViewButtons/CopilotButton.vue";
import {
  resolveLanguageModel,
  usePluginContext,
  useStreamText,
} from "./composables";
import { icons } from "./config/icons";
import { copilot as copilotButton } from "./extensions/textarea-buttons/copilot";
import { copilot as copilotMark } from "./extensions/writer-marks/copilot";
import { copilotSuggestions as copilotSuggestionsMark } from "./extensions/writer-marks/copilot-suggestions";
import { legacyViewButtonMixin, loadAISDK } from "./utils";
import "./index.css";
import "./styles/copilot-suggestions.css";
import "./styles/copilot-generating.css";

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
    ...(__PLAYGROUND__ && {
      "playground-api-key": PlaygroundApiKeyField,
    }),
  },
  textareaButtons: {
    copilot: copilotButton,
  },
  writerMarks: {
    copilot: copilotMark,
    "copilot-suggestions": copilotSuggestionsMark,
  },
  thirdParty: {
    copilot: {
      resolvePluginContext: usePluginContext,
      streamText: useStreamText,
      resolveLanguageModel,
      loadAISDK,
    },
  },
  icons,
  use: {
    legacyViewButtonSupport: legacyViewButtonMixin,
  },
});
