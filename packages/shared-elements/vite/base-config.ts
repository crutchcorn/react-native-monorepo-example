import { UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

export const baseConfig = {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@react-native-async-storage/async-storage",
        "@reduxjs/toolkit",
        "@tanstack/react-query",
        "axios",
        "dayjs",
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-native",
        "react-native-reanimated",
        "react-native-safe-area-context",
        "react-native-vector-icons",
        "react-native-vector-icons/MaterialCommunityIcons",
        "react-native-vector-icons/MaterialIcons",
        "react-redux",
        "react/jsx-runtime",
        "styled-components",
        "styled-components/native",
      ],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
          "react-native": "ReactNative",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
} satisfies UserConfigExport;
