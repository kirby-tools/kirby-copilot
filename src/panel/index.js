import CopilotSection from "./components/Copilot.vue";
import PlaygroundApiKeyField from "./components/Playground/ApiKey.vue";
import "./index.css";

window.panel.plugin("johannschopplich/copilot", {
  sections: {
    copilot: CopilotSection,
  },
  // eslint-disable-next-line no-undef
  ...(__PLAYGROUND__ && {
    fields: {
      "playground-api-key": PlaygroundApiKeyField,
    },
  }),
});
