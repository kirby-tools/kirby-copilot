import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    __PLAYGROUND__: JSON.stringify(false),
  },
});
