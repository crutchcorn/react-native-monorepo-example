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
    "^react-native-gesture-handler$":
      "<rootDir>/node_modules/react-native-gesture-handler",
    "^react-native-gesture-handler/Swipeable$":
      "<rootDir>/node_modules/react-native-gesture-handler/Swipeable",
    "^@react-navigation/native$":
      "<rootDir>/node_modules/@react-navigation/native",
    "^@react-navigation/stack/lib/commonjs/views/GestureHandlerNative$":
      "<rootDir>/node_modules/@react-navigation/stack/lib/commonjs/views/GestureHandlerNative",
    "^react-native/Libraries/EventEmitter/NativeEventEmitter$":
      "<rootDir>/node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter",
    "^react-native$": "<rootDir>/node_modules/react-native",
    "^react$": "<rootDir>/node_modules/react",
    "^react-native-reanimated$":
      "<rootDir>/node_modules/react-native-reanimated",
    "^react-native-image-picker$":
      "<rootDir>/node_modules/react-native-image-picker",
    "^react-native-fontawesome-pro$":
      "<rootDir>/node_modules/react-native-fontawesome-pro",
    "^react-native-phone-call$":
      "<rootDir>/node_modules/react-native-phone-call",
    "^react-native-geocoding$": "<rootDir>/node_modules/react-native-geocoding",
    "^react-native-maps$": "<rootDir>/node_modules/react-native-maps",
  },
  setupFiles: [path.resolve(__dirname, "./jest/setup-files.js")],
  setupFilesAfterEnv: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "./node_modules/react-native-device-info/jest.setup.ts",
    path.resolve(__dirname, "./jest/setup-files-after-env.js"),
  ],
  transform: {
    "^.+\\.jsx$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "./babel.config.js") },
    ],
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native(.*)?|@react-navigation|@react-native(-community)?|@crutchcorn)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "dist/"],
  globals: {
    "ts-jest": {
      babelConfig: path.resolve(__dirname, "./babel.config.js"),
      tsconfig: path.resolve(__dirname, "./tsconfig.jest.json"),
    },
  },
};
