import type { StorybookConfig } from '@storybook/react-vite';
import {InlineConfig, mergeConfig} from 'vite';
import _appViteConfig from '@crutchcorn/config/app-vite.config';
import {removeMobileCodePlugin} from "../vite/remove-mobile-code-plugin";

const appViteConfig: InlineConfig = _appViteConfig as never;

const config: StorybookConfig = {
  async viteFinal(config) {
    return mergeConfig(config, mergeConfig(appViteConfig, {plugins: [removeMobileCodePlugin()], define: {'process.env': {
      IS_WEB: true
        }}}));
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
