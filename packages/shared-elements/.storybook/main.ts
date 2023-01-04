import { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig } from 'vite';
import appViteConfig from '@crutchcorn/config/app-vite.config';

const config: StorybookViteConfig = {
  async viteFinal(config) {
    return mergeConfig(config, appViteConfig);
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
