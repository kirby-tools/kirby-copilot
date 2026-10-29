import { guardAgentWrites } from "./agents";
import PromptDialog from "./components/Dialogs/Prompt.vue";
import CopilotField from "./components/Fields/Copilot.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import CopilotButton from "./components/ViewButtons/CopilotButton.vue";
import AgentCell from "./components/Views/AgentCell.vue";
import AgentsView from "./components/Views/Agents.vue";
import AgentsAuthorizeView from "./components/Views/AgentsAuthorize.vue";
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
    copilot: CopilotButton,
  },
  components: {
    "k-copilot-prompt-dialog": PromptDialog,
    "k-copilot-agents-view": AgentsView,
    "k-copilot-agents-authorize-view": AgentsAuthorizeView,
    "k-table-copilot-agent-cell": AgentCell,
  },
  fields: {
    copilot: CopilotField,
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
    copilot: copilotThirdPartyApi,
  },
  icons,
  use: {
    guardAgentWrites,
  },
});
