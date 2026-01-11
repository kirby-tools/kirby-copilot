import type { UserConfig } from "tsdown/config";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsdown/config";

const currentDir = fileURLToPath(new URL(".", import.meta.url));
const rootDir = path.resolve(currentDir, "../..");

const entries = fs
  .readdirSync(currentDir)
  .filter((file) => file.endsWith(".js") && !file.endsWith(".config.js"));

export default defineConfig(
  entries.map(
    (entry) =>
      ({
        entry,
        outDir: `${rootDir}/assets`,
        outExtensions: () => ({ js: ".js" }),
        outputOptions: {
          inlineDynamicImports: true,
        },
        platform: "browser",
        minify: true,
      }) satisfies UserConfig,
  ),
);
