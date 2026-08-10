import type { UserConfig } from "tsdown/config";
import * as fs from "node:fs";
import * as path from "node:path";
import { defineConfig } from "tsdown/config";

const rootDir = path.resolve(import.meta.dirname, "../..");

const entries = fs
  .readdirSync(import.meta.dirname)
  .filter((file) => file.endsWith(".js") && !file.endsWith(".config.js"));

export default defineConfig(
  entries.map(
    (entry) =>
      ({
        entry,
        outDir: `${rootDir}/assets`,
        outputOptions: {
          codeSplitting: false,
        },
        deps: {
          onlyBundle: false,
        },
        platform: "browser",
        minify: true,
      }) satisfies UserConfig,
  ),
);
