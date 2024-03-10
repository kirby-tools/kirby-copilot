import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL("../../../", import.meta.url));

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
