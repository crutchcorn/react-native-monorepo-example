import { PluginOption } from "vite";

// TODO: Migrate to AST plugin
const namedStyledRegex =
  /import\s+styled\s*,\s*\{\s*(.*)\s*}\s*from\s"styled-components\/native"/;
const styledRegex = /import\s+styled\s+from\s"styled-components\/native"/;

export function transformNativePlugin(): PluginOption {
  return {
    name: "transform native",
    async transform(code, _id, ssr) {
      if (ssr) return undefined;

      const namedStyledMatch = code.match(namedStyledRegex);
      const styledMatch = code.match(styledRegex);

      if (namedStyledMatch) {
        const [, namedImports] = namedStyledMatch;

        return code.replace(
          namedStyledRegex,
          `import { styled, ${namedImports} } from "styled-components/native"`,
        );
      }

      if (styledMatch) {
        return code.replace(
          styledRegex,
          'import { styled } from "styled-components/native"',
        );
      }

      return undefined;
    },
    enforce: "pre",
  };
}
