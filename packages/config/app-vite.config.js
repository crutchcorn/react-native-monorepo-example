const path = require("path");

module.exports = {
  optimizeDeps: {
    include: [
      'react',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'react-dom',
      "styled-components",
      "styled-components/native",
    ],
  },
  build: {
    // Needed for styled-components/native
    commonjsOptions: {
      transformMixedEsModules: true
    },
  },
  resolve: {
    dedupe: [
      'react',
      'react-dom',
      'react-native-web',
      'styled-components',
      'styled-components/native',
      "react-native-vector-icons/MaterialIcons",
      "react-native-vector-icons/MaterialCommunityIcons",
      "react-native-vector-icons",
      "@tanstack/react-query",
    ],
    alias: {
      'react-native': 'react-native-web',
      "react-native-vector-icons/MaterialIcons": "react-native-vector-icons/dist/MaterialIcons",
      "react-native-vector-icons/MaterialCommunityIcons": "react-native-vector-icons/dist/MaterialCommunityIcons",
      // Needed for styled-components/native
      "postcss-safe-parser": path.resolve(__dirname, "vite", "noop.js"),
    },
  }
}
