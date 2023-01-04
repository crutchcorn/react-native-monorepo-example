import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import copy from "rollup-plugin-copy";
import appViteConfig from '@crutchcorn/config/app-vite.config';

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs(),
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
  ...appViteConfig
})
