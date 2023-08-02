import { defineConfig, PluginOption } from "vite";
import { getWebConfig } from "./vite/web-config";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(() => {
  const config = getWebConfig();
  return {
    ...config,
    plugins: [...config.plugins, visualizer() as PluginOption],
  };
});
