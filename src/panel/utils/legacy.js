import { isKirby5 } from "kirbyuse";
import CopilotButton from "../components/ViewButtons/CopilotButton.vue";

export function legacyViewButtonMixin(Vue) {
  if (isKirby5()) {
    return;
  }

  let buttonComponent;

  Vue.mixin({
    mounted() {
      if (this.$options.name !== "k-header") return;

      const buttonGroup = this.$children.find(
        (child) => child.$options.name === "k-button-group",
      );
      if (!buttonGroup) return;

      const ButtonConstructor = Vue.extend(CopilotButton);
      buttonComponent = new ButtonConstructor({ parent: this });
      buttonComponent.$mount();

      buttonGroup.$el.before(buttonComponent.$el);
    },
    beforeDestroy() {
      if (this.$options.name !== "k-header") return;

      if (buttonComponent) {
        buttonComponent.$destroy();
        buttonComponent = undefined;
      }
    },
  });
}
