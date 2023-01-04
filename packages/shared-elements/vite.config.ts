import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from 'node:fs';
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: {
        'shared-elements': path.resolve(__dirname, "src/index.tsx"),
        polyfills: path.resolve(__dirname, "src/polyfills.ts"),
      },
      name: "SharedElements",
      fileName: (format, entryName) => `${entryName}-${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-native",
        "styled-components",
        "styled-components/native",
        "dayjs",
        "react-native-vector-icons",
        "react-native-vector-icons/MaterialIcons",
        "@tanstack/react-query",
        "@react-native-async-storage/async-storage"
      ],
      output: {
        globals: {
          react: "React",
          "react-native": "ReactNative",
          "react-dom": "ReactDOM"
        },
      },
    },
  },
});
