import { baseConfig } from "./base-config";
import { removeMobileCodePlugin } from "./remove-mobile-code-plugin";
import path from "node:path";
import { resolve } from "path";
import { baseOutDir, commonFormats, getFileName } from "./common-config";
import { InlineConfig } from "vite";
import dts from "vite-plugin-dts";

export const getWebConfig = () =>
  ({
    ...baseConfig,
    plugins: [
      removeMobileCodePlugin(),
      ...baseConfig.plugins,
      dts({
        entryRoot: path.resolve(__dirname, "../src"),
        outDir: resolve(__dirname, "..", baseOutDir, "web"),
      }),
    ],
    build: {
      ...baseConfig.build,
      outDir: resolve(__dirname, "..", baseOutDir, "web"),
      lib: {
        entry: resolve(__dirname, "../src/index.tsx"),
        name: "SharedElementsWeb",
        fileName: (format) => getFileName("web", format),
        formats: commonFormats,
      },
    },
  } satisfies InlineConfig);
