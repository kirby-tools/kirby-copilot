import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const currentDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    outDir: resolve(currentDir, "assets"),
    lib: {
      entry: resolve(currentDir, "node_modules/modelfusion/index.js"),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "modelfusion.mjs",
        inlineDynamicImports: true,
        generatedCode: { constBindings: true },
        externalLiveBindings: false,
      },
    },
  },
});
