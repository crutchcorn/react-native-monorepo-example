import { PluginOption } from "vite";

export function removeMobileCodePlugin(): PluginOption {
  return {
    name: "define web",
    async transform(code, _id, ssr) {
      if (!ssr && code.includes("process.env.IS_WEB")) {
        return code.replace(/process.env.IS_WEB/g, "true");
      }

      return undefined;
    },
    enforce: "pre",
  };
}
