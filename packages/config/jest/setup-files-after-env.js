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


// Styled components has a _weird_ way of exporting their native components
jest.mock(
  "styled-components/native",
  () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SC = jest.requireActual("styled-components/native");
    return Object.assign(SC.default, SC);
  }
);

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-vector-icons/MaterialIcons", () => {
  const RN = require("react-native");

  return RN.View;
});

jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => {
  const RN = require("react-native");

  return RN.View;
});

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

afterEach(() => {
  mockAddEventListener.mockReset();
  mockRemoveEventListener.mockReset();
  mockOpenURL.mockReset();
  mockCanOpenURL.mockReset();
  mockGetInitialURL.mockReset();
});
