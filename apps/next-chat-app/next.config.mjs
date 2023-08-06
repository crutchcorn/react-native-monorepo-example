import webpack from "webpack";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    // Mix in aliases
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-vector-icons/MaterialIcons":
        "react-native-vector-icons/dist/MaterialIcons",
      "react-native-vector-icons/MaterialCommunityIcons":
        "react-native-vector-icons/dist/MaterialCommunityIcons",
      // Needed for styled-components/native
      "postcss-safe-parser": path.resolve(__dirname, "webpack", "noop.js"),
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
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      }),
    );

    return config;
  },
};

export default nextConfig;
