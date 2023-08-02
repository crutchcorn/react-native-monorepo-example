import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

/**
 * This is where mocks that apply to AA, but not `shared-elements` live.
 *
 * It's rare that we should put a mock here, but just in case we need it.
 */
jest.mock(
  "@react-navigation/stack/lib/commonjs/views/GestureHandlerNative",
  () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const RN = require("react-native");
    return {
      PanGestureHandler: RN.View,
      GestureHandlerRootView: RN.View,
    };
  },
);

jest.mock("styled-components", () => {
  const SC = jest.requireActual("styled-components");
  return Object.assign(SC.default, SC);
});

// Styled components has a _weird_ way of exporting their native components
jest.mock("styled-components/native", () => {
  const SC = jest.requireActual("styled-components/native");
  return Object.assign(SC.default, SC);
});
