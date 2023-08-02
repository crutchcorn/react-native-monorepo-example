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
    "^dayjs$": "<rootDir>/node_modules/dayjs",
    "^@tanstack/react-query$": "<rootDir>/node_modules/@tanstack/react-query",
    "^styled-components/native$":
      "<rootDir>/node_modules/styled-components/native",
    "^react-native-vector-icons/MaterialCommunityIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/MaterialCommunityIcons",
    "^react-native-vector-icons/MaterialIcons":
      "<rootDir>/node_modules/react-native-vector-icons/MaterialIcons",
    "^react-native-vector-icons/Zocial$":
      "<rootDir>/node_modules/react-native-vector-icons/Zocial",
    "^react-native-vector-icons/Octicons$":
      "<rootDir>/node_modules/react-native-vector-icons/Octicons",
    "^react-native-vector-icons/Ionicons$":
      "<rootDir>/node_modules/react-native-vector-icons/Ionicons",
    "^react-native-vector-icons/Foundation$":
      "<rootDir>/node_modules/react-native-vector-icons/Foundation",
    "^react-native-vector-icons/EvilIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/EvilIcons",
    "^react-native-vector-icons/Entypo$":
      "<rootDir>/node_modules/react-native-vector-icons/Entypo",
    "^react-native-vector-icons/FontAwesome$":
      "<rootDir>/node_modules/react-native-vector-icons/FontAwesome",
    "^react-native-vector-icons/FontAwesome5$":
      "<rootDir>/node_modules/react-native-vector-icons/FontAwesome5",
    "^react-native-vector-icons/SimpleLineIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/SimpleLineIcons",
    "^react-native-vector-icons/Feather$":
      "<rootDir>/node_modules/react-native-vector-icons/Feather",
    "^react-native-vector-icons/AntDesign$":
      "<rootDir>/node_modules/react-native-vector-icons/AntDesign",
    "^react-native-vector-icons/Fontisto$":
      "<rootDir>/node_modules/react-native-vector-icons/Fontisto",
    "^react-native-vector-icons/dist/MaterialCommunityIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/MaterialCommunityIcons",
    "^react-native-vector-icons/dist/MaterialIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/MaterialIcons",
    "^react-native-vector-icons/dist/Zocial$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Zocial",
    "^react-native-vector-icons/dist/Octicons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Octicons",
    "^react-native-vector-icons/dist/Ionicons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Ionicons",
    "^react-native-vector-icons/dist/Foundation$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Foundation",
    "^react-native-vector-icons/dist/EvilIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/EvilIcons",
    "^react-native-vector-icons/dist/Entypo$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Entypo",
    "^react-native-vector-icons/dist/FontAwesome$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/FontAwesome",
    "^react-native-vector-icons/dist/FontAwesome5$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/FontAwesome5",
    "^react-native-vector-icons/dist/SimpleLineIcons$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/SimpleLineIcons",
    "^react-native-vector-icons/dist/Feather$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Feather",
    "^react-native-vector-icons/dist/AntDesign$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/AntDesign",
    "^react-native-vector-icons/dist/Fontisto$":
      "<rootDir>/node_modules/react-native-vector-icons/dist/Fontisto",
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
    "node_modules/(?!((jest-)?react-native(.*)?|@react-navigation|@react-native(-community)?|@crutchcorn|axios|styled-components)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "dist/"],
};
