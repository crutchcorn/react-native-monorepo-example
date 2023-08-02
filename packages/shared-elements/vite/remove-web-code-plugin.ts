import { PluginOption } from "vite";
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";

/**
 * This code is required to generate a mobile-only build, as:
 * - Styled components are eagerly imported
 * - This is because, despite dead code elimination, SC breaks with `styled.div` usage
 * @see https://github.com/styled-components/babel-plugin-styled-components/issues/245
 *
 * So this plugin literally replaces:
 * `styled.div` with `() => null`
 */
export function removeWebCodePlugin(): PluginOption {
  return {
    name: "define web",
    async transform(code, _id, ssr) {
      if (!ssr && code.includes("process.env.IS_WEB")) {
        return code.replace(/process.env.IS_WEB/g, "false");
      }
      if (_id.includes(".styles") && code.includes("styled.")) {
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        traverse(ast, {
          TaggedTemplateExpression(path) {
            const styledExpressionNode = path.node.tag;
            if (
              styledExpressionNode.type === "MemberExpression" &&
              styledExpressionNode.object &&
              styledExpressionNode.object.type === "Identifier" &&
              styledExpressionNode.object.name === "styled"
            ) {
              const replacementAst = parse("() => null");
              // True, but tell TypeScript that
              if (
                replacementAst.type === "File" &&
                path.parent.type === "VariableDeclarator"
              ) {
                // debugger;
                path.parent.init = replacementAst.program.body[0] as never;
              }
            }
          },
        });

        const output = generate(ast);

        return output.code;
      }

      return undefined;
    },
    enforce: "pre",
  };
}
