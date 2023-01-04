import { Platform, useWindowDimensions } from "react-native";
import { useMemo } from "react";

export const useDimensions = () => {
  const {height, width, fontScale, scale} = useWindowDimensions()

  const isDesktop = useMemo(() => width > 768, [width]);

  const isWeb = useMemo(() => Platform.OS === 'web', []);
  const isiOS = useMemo(() => Platform.OS === 'ios', []);
  const isAndroid = useMemo(() => Platform.OS === 'android', []);

  return {
    height,
    width,
    fontScale,
    scale,
    isDesktop,
    isWeb,
    isiOS,
    isAndroid
  }
}
