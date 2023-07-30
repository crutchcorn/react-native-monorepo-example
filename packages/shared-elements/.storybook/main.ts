import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import appViteConfig from '@crutchcorn/config/app-vite.config';

const config: StorybookConfig = {
  async viteFinal(config) {
    return mergeConfig(config, (appViteConfig as never));
  },
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: "@storybook/addon-docs",
    options: {
      transcludeMarkdown: true
    }
  }],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "core": {}
};
export default config;