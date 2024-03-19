import { resolve } from "node:path";
import { defineConfig } from "vite";
import { rootDir } from "../constants";

export default defineConfig({
  build: {
    outDir: resolve(rootDir, "assets"),
    lib: {
      entry: resolve(rootDir, "node_modules/modelfusion/index.js"),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "modelfusion.js",
        inlineDynamicImports: true,
      },
    },
  },
});
