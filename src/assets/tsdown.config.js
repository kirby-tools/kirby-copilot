import { fileURLToPath } from "node:url";
import { defineConfig } from "tsdown/config";

const rootDir = fileURLToPath(new URL("../../", import.meta.url));

export default defineConfig(
  ["ai", "pdfjs", "pdfjs.worker"].map((input) => ({
    entry: `${input}.js`,
    outDir: `${rootDir}/assets`,
    outExtensions: () => ({ js: ".js" }),
    outputOptions: {
      inlineDynamicImports: true,
    },
    platform: "browser",
    minify: true,
  })),
);
