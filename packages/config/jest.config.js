// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  preset: "@testing-library/react-native",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      path.join(__dirname, `./jest/assets-transformer.js`),
    "\\.(css|less)$": path.join(__dirname, `./jest/assets-transformer.js`),
    "^@react-native-async-storage/async-storage/jest/async-storage-mock$":
      "<rootDir>/node_modules/@react-native-async-storage/async-storage/jest/async-storage-mock",
    "^@react-native-async-storage/async-storage$":
      "<rootDir>/node_modules/@react-native-async-storage/async-storage",
    "^@react-navigation/native$":
      "<rootDir>/node_modules/@react-navigation/native",
    "^@react-navigation/stack/lib/commonjs/views/GestureHandlerNative$":
      "<rootDir>/node_modules/@react-navigation/stack/lib/commonjs/views/GestureHandlerNative",
    "^react-native/Libraries/EventEmitter/NativeEventEmitter$":
      "<rootDir>/node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter",
    "^react-native$": "<rootDir>/node_modules/react-native",
    "^react$": "<rootDir>/node_modules/react",
    "^@tanstack/react-query$": "<rootDir>/node_modules/@tanstack/react-query",
    "^styled-components/native$":
      "<rootDir>/node_modules/styled-components/native",
    "^react-native-vector-icons/MaterialIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/MaterialIcons",
    "^react-native-vector-icons/MaterialCommunityIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/MaterialCommunityIcons",
  },
  setupFiles: [path.resolve(__dirname, "./jest/setup-files.js")],
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest/setup-files-after-env.js"),
  ],
  transform: {
    "^.+\\.jsx$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "./babel.config.js") },
    ],
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babelConfig: path.resolve(__dirname, "./babel.config.js"),
        tsconfig: path.resolve(__dirname, "./tsconfig.jest.json"),
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native(.*)?|@react-navigation|@react-native(-community)?|@crutchcorn)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "dist/"],
};
