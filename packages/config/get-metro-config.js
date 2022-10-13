// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/**
 * @param {string} __dirname 
 */
module.exports = (__dirname) => {
const packagesWorkspace = path.resolve(path.join(__dirname, "../../packages"));

const watchFolders = [packagesWorkspace];

const nodeModulesPaths = [path.resolve(path.join(__dirname, "./node_modules"))];

return {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'react') {
        return {
          filePath: path.resolve(path.join(__dirname, "./node_modules/react/index.js")),
          type: 'sourceFile',
        };
      }
      if (moduleName === 'react-native') {
        return {
          filePath: path.resolve(path.join(__dirname, "./node_modules/react-native/index.js")),
          type: 'sourceFile',
        };
      }
      // Optionally, chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
    nodeModulesPaths,
  },
  watchFolders,
};
}