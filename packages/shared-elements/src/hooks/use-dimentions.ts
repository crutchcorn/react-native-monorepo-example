import { useWindowDimensions } from "react-native";
import { useMemo } from "react";

export const useDimensions = () => {
  const {height, width, fontScale, scale} = useWindowDimensions()

  const isDesktop = useMemo(() => width > 768, [width]);

  return {
    height,
    width,
    fontScale,
    scale,
    isDesktop
  }
}
