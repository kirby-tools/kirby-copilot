import CopilotSection from "./components/Copilot.vue";
import ApiKeyField from "./components/ApiKey.vue";
import "./index.css";

window.panel.plugin("johannschopplich/copilot", {
  sections: {
    copilot: CopilotSection,
  },
  // eslint-disable-next-line no-undef
  ...(__PLAYGROUND__ && {
    fields: {
      apiKey: ApiKeyField,
    },
  }),
});
