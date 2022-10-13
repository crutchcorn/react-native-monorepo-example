/* eslint-disable no-undef */
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

jest.mock(
  "@react-navigation/stack/lib/commonjs/views/GestureHandlerNative",
  () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const RN = require("react-native");
    return {
      PanGestureHandler: RN.View,
      GestureHandlerRootView: RN.View,
    };
  }
);

jest.mock("react-native-reanimated", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();
const mockOpenURL = jest.fn();
const mockCanOpenURL = jest.fn(() => Promise.resolve(true));
const mockGetInitialURL = jest.fn();

jest.mock("react-native/Libraries/Linking/Linking", () => {
  return {
    addEventListener: mockAddEventListener,
    removeEventListener: mockRemoveEventListener,
    openURL: mockOpenURL,
    canOpenURL: mockCanOpenURL,
    getInitialURL: mockGetInitialURL,
  };
});

jest.mock("react-native-image-picker", () => {
  return {
    showImagePicker: jest.fn(),
    launchCamera: jest.fn(),
    launchImageLibrary: jest.fn(),
  };
});

jest.mock("react-native-fontawesome-pro", () => {
  return () => null;
});

afterEach(() => {
  mockAddEventListener.mockReset();
  mockRemoveEventListener.mockReset();
  mockOpenURL.mockReset();
  mockCanOpenURL.mockReset();
  mockGetInitialURL.mockReset();
});

jest.mock("react-native-phone-call", () => {
  return {
    call: jest.fn(),
  };
});

jest.mock("react-native-geocoding", () => {
  return {
    init: jest.fn(),
    from: jest.fn(),
  };
});

jest.mock("react-native-maps", () => {
  const mockMapTypes = {
    STANDARD: 0,
    SATELLITE: 1,
    HYBRID: 2,
    TERRAIN: 3,
    NONE: 4,
    MUTEDSTANDARD: 5,
  };

  return {
    __esModule: true,
    default: jest.fn(),
    Marker: jest.fn(),
    MAP_TYPES: mockMapTypes,
    PROVIDER_DEFAULT: "default",
    PROVIDER_GOOGLE: "google",
  };
});
