import { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { light } from "../constants";
import { useDimensions } from "./use-dimentions";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext) as typeof light &
    ReturnType<typeof useDimensions>;
  return themeContext;
};
