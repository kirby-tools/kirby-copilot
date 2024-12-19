import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { rootDir } from "../constants";

export const currentDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: resolve(rootDir, "assets"),
    lib: {
      entry: resolve(currentDir, "index.js"),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "pdfjs.worker.js",
        inlineDynamicImports: true,
      },
    },
  },
});