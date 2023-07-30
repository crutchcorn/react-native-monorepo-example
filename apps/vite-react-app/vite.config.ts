import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import copy from "rollup-plugin-copy";
import appViteConfig from "@crutchcorn/config/app-vite.config";
import fs from "fs";
import esbuild from "esbuild";

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs(),
    {
      name: "load-js-files-as-jsx",
      async load(id) {
        if (
          !id.match(
            /node_modules\/(?:react-native-reanimated|react-native-elements|react-native-ratings|react-native-vector-icons|react-native-actionsheet|react-native-actions-sheet)\/.*.js$/,
          )
        ) {
          return;
        }

        const file = await fs.promises.readFile(id, "utf-8");
        return esbuild.transformSync(file, { loader: "jsx" });
      },
    },
    {
      ...copy({
        hook: "options",
        flatten: true,
        targets: [
          {
            src: "node_modules/react-native-vector-icons/Fonts/*",
            dest: "public/fonts",
          },
        ],
      }),
      enforce: "pre",
    },
  ],
  ...appViteConfig,
});
