// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/**
 * @param {string} __dirname
 */
module.exports = (__dirname) => {
  const packagesWorkspace = path.resolve(
    path.join(__dirname, "../../packages"),
  );

  const watchFolders = [packagesWorkspace];

  const nodeModulesPaths = [
    path.resolve(path.join(__dirname, "./node_modules")),
  ];

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
        if (
          moduleName.startsWith("react") ||
          moduleName.startsWith("@react-navigation") ||
          moduleName.startsWith("@react-native") ||
          moduleName.startsWith("@react-native-community") ||
          moduleName.startsWith("@tanstack") ||
          moduleName.startsWith("styled-components") ||
          moduleName.startsWith("@redux") ||
          moduleName.startsWith("redux")
        ) {
          const pathToResolve = path.resolve(
            __dirname,
            "node_modules",
            moduleName,
          );
          return context.resolveRequest(context, pathToResolve, platform);
        }
        // Optionally, chain to the standard Metro resolver.
        return context.resolveRequest(context, moduleName, platform);
      },
      nodeModulesPaths,
    },
    watchFolders,
  };
};
