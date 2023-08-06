const { DefinePlugin } = require('webpack');
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-native-web", "@crutchcorn/shared-elements"],
  webpack(config, options) {
    // Mix in aliases
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': require.resolve('react-native-web'),
      "react-native-vector-icons/MaterialIcons": "react-native-vector-icons/dist/MaterialIcons",
      "react-native-vector-icons/MaterialCommunityIcons": "react-native-vector-icons/dist/MaterialCommunityIcons",
      // Needed for styled-components/native
      "postcss-safe-parser": path.resolve(__dirname, "webpack", "noop.js")
    };

    config.resolve.extensions = [
      ...defaultExtensions.map((ext) => ext.replace(/^\./, ".web.")),
      // For AWS
      ...defaultExtensions.map((ext) => ext.replace(/^\./, ".browser.")),
      ...defaultExtensions,
      ...(config.resolve?.extensions ?? []),
    ];

    if (!config.plugins) {
      config.plugins = [];
    }

    // Expose __DEV__ from Metro.
    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      })
    );

    return config;
  },
};

module.exports = nextConfig;
