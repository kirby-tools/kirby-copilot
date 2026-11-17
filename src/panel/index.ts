import { guardAgentWrites } from "./agents";
import AgentCell from "./components/AgentCell.vue";
import AgentsView from "./components/AgentsView.vue";
import ConsentView from "./components/ConsentView.vue";
import Field from "./components/Field.vue";
import ApiKeyField from "./components/Playground/ApiKeyField.vue";
import PromptDialog from "./components/PromptDialog.vue";
import ViewButton from "./components/ViewButton.vue";
import { icons } from "./config/icons";
import { copilot as copilotButton } from "./extensions/textarea-buttons/copilot";
import { copilot as copilotMark } from "./extensions/writer-marks/copilot";
import { copilotSuggestions as copilotSuggestionsMark } from "./extensions/writer-marks/copilot-suggestions";
import { copilotThirdPartyApi } from "./third-party";
import "virtual:uno.css";
import "./styles/copilot-suggestions.css";
import "./styles/copilot-generating.css";

window.panel.plugin("johannschopplich/copilot", {
  viewButtons: {
    copilot: ViewButton,
  },
  components: {
    "k-copilot-prompt-dialog": PromptDialog,
    "k-copilot-agents-view": AgentsView,
    "k-copilot-consent-view": ConsentView,
    "k-table-copilot-agent-cell": AgentCell,
  },
  fields: {
    copilot: Field,
    ...(__PLAYGROUND__ && {
      "playground-api-key": ApiKeyField,
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
    copilot: copilotThirdPartyApi,
  },
  icons,
  use: {
    guardAgentWrites,
  },
});
