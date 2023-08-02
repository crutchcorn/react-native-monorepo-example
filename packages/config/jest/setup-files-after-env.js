import "@testing-library/jest-native/extend-expect";

/**
 * If you add or remove anymore mocks to this file, make sure to update
 * the jest.config.js `moduleNameMapper` to include all the file paths.
 *
 * Otherwise, you'll end up with errors like so:
 * >  Cannot find module '@react-navigation/stack/lib/commonjs/views/GestureHandlerNative' from '../../packages/config/jest/setup-mocks.js'
 *
 * Caused by Jest unable to figure out our monorepo directory structure
 */
import * as mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

import { Crypto } from "@peculiar/webcrypto";

global.crypto = new Crypto();

// import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";
//
// jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);
//
// jest.mock("react-native-reanimated", () => {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const Reanimated = require("react-native-reanimated/mock");
//
//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};
//
//   return Reanimated;
// });

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

/**
 * In Vite, we use the module mapper/alias functionality to map to the web version of these icons.
 *
 * But Babel doesn't like this AT ALL for complex reasons and forces our hand to do this by hand.
 */
jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => {
  const pkg = jest.requireActual(
    "react-native-vector-icons/dist/MaterialCommunityIcons",
  );
  return Object.assign(pkg.default, pkg);
});

jest.mock("react-native-vector-icons/MaterialIcons", () => {
  const pkg = jest.requireActual(
    "react-native-vector-icons/dist/MaterialIcons",
  );
  return Object.assign(pkg.default, pkg);
});

jest.mock("react-native-vector-icons/Zocial", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Zocial");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Octicons", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Octicons");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Ionicons", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Ionicons");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Foundation", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Foundation");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/EvilIcons", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/EvilIcons");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Entypo", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Entypo");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/FontAwesome", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/FontAwesome");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/FontAwesome5", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/FontAwesome5");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/SimpleLineIcons", () => {
  const pkg = jest.requireActual(
    "react-native-vector-icons/dist/SimpleLineIcons",
  );
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Feather", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Feather");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/AntDesign", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/AntDesign");
  return Object.assign(pkg.default, pkg);
});
jest.mock("react-native-vector-icons/Fontisto", () => {
  const pkg = jest.requireActual("react-native-vector-icons/dist/Fontisto");
  return Object.assign(pkg.default, pkg);
});
