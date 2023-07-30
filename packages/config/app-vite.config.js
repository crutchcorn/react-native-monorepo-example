// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const defaultExtensions = [
  ".mjs",
  ".js",
  ".mts",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
];

const allExtensions = [
  ...defaultExtensions.map((ext) => ext.replace(/^\./, ".web.")),
  // For AWS
  ...defaultExtensions.map((ext) => ext.replace(/^\./, ".browser.")),
  ...defaultExtensions,
];

module.exports = {
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
      mainFields: ["module", "main"],
      resolveExtensions: [".web.js", ".js", ".ts"],
    },
    include: [
      "react",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom",
      "styled-components",
      "styled-components/native",
      "use-sync-external-store-shim",
      "use-sync-external-store",
    ],
  },
  build: {
    // Needed for styled-components/native
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // define: {
  //   __DEV__: env.mode === "development",
  // },
  resolve: {
    extensions: allExtensions,
    dedupe: [
      "@react-native-async-storage/async-storage",
      "@react-native-community/netinfo",
      "@react-native-picker/picker",
      "@reduxjs/toolkit",
      "@tanstack/react-query",
      "axios",
      "aws-amplify",
      "aws-amplify-react-native",
      "react",
      "react-dom",
      "react-native",
      "react-native-device-info",
      "react-native-elements",
      "react-native-geocoding",
      "react-native-gesture-handler",
      "react-native-image-picker",
      "react-native-maps",
      "react-native-phone-call",
      "react-native-push-notification",
      "react-native-reanimated",
      "react-native-safe-area-context",
      "react-native-svg",
      "react-native-vector-icons",
      "react-native-vector-icons/MaterialCommunityIcons",
      "react-native-vector-icons/MaterialIcons",
      "react-native-webview",
      "react-redux",
      "react/jsx-runtime",
      "styled-components",
      "styled-components/native",
      "react-native-email-link",
      "react-native-pager-view",
      "react-native-actionsheet",
      "use-sync-external-store-shim",
      "use-sync-external-store",
      "@aws-amplify/ui-react",
      "@fortawesome/react-native-fontawesome",
      "react-native-actions-sheet",
      "react-native-fs",
    ],
    alias: [
      { find: /^react-native\/(.*)/, replacement: "react-native-web/$1" },
      {
        find: /^react-native$/,
        replacement: "react-native-web",
      },
      {
        find: "react-native-vector-icons/MaterialIcons",
        replacement: "react-native-vector-icons/dist/MaterialIcons",
      },
      {
        find: "react-native-vector-icons/MaterialCommunityIcons",
        replacement: "react-native-vector-icons/dist/MaterialCommunityIcons",
      },
      // Needed for styled-components/native
      {
        find: "postcss-safe-parser",
        replacement: path.resolve(__dirname, "vite", "noop.js"),
      },
    ],
  },
};
