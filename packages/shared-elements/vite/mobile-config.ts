import { baseConfig } from "./base-config";
import path from "node:path";
import { resolve } from "path";
import { baseOutDir, commonFormats, getFileName } from "./common-config";
import { InlineConfig } from "vite";
import { removeWebCodePlugin } from "./remove-web-code-plugin";
import dts from "vite-plugin-dts";

export const getMobileConfig = () =>
  ({
    ...baseConfig,
    plugins: [
      removeWebCodePlugin(),
      ...baseConfig.plugins,
      dts({
        entryRoot: path.resolve(__dirname, "../src"),
        outDir: resolve(__dirname, "..", baseOutDir, "mobile"),
      }),
    ],
    build: {
      ...baseConfig.build,
      outDir: resolve(__dirname, "..", baseOutDir, "mobile"),
      lib: {
        entry: resolve(__dirname, "../src/index.tsx"),
        name: "SharedElementsMobile",
        fileName: (format) => getFileName("mobile", format),
        formats: commonFormats,
      },
    },
  }) satisfies InlineConfig;
