import Copilot from "./components/Copilot.vue";
import "./index.css";

window.panel.plugin("johannschopplich/copilot", {
  sections: {
    copilot: Copilot,
  },
});
