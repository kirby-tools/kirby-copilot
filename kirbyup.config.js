import { defineConfig } from "kirbyup/config";

export default defineConfig({
  extendViteConfig: {
    define: {
      // eslint-disable-next-line node/prefer-global/process
      __PLAYGROUND__: JSON.stringify(process.env.PLAYGROUND === "true"),
    },
  },
});
