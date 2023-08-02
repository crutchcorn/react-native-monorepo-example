// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestConfig = require("@crutchcorn/config/jest.config");

module.exports = {
  ...jestConfig,
  setupFilesAfterEnv: [
    ...jestConfig.setupFilesAfterEnv,
    "./config/setup-files-after-env-local.ts",
  ],
  moduleNameMapper: {
    ...jestConfig.moduleNameMapper,
    "^react-native$": "<rootDir>/node_modules/react-native",
  },
};
