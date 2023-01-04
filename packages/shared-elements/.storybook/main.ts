import { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from 'vite';
import * as path from "path";
// import appConfig from '../../../apps/vite-react-app/vite.config';

const config: StorybookViteConfig = {
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      optimizeDeps: {
        // Needed for react-native-icons
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
          },
        },
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
        dedupe: ['react', 'react-dom', 'react-native-web', 'styled-components', 'styled-components/native'],
        alias: {
          'react-native': 'react-native-web',
          // Needed for styled-components/native
          "postcss-safe-parser": path.resolve(process.cwd(), "config", "noop.js"),
        },
      },
      ssr: {
        external: [
          'react-dom/server',
          'react-dom/client',
        ],
        noExternal: [
          'styled-components',
          'styled-components/native',
        ],
      },
    });
    // return mergeConfig(config, appConfig);
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}

export default config;
