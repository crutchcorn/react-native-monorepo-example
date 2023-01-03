import { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { dark, light } from "../constants";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === "dark";

  const theme = isDarkMode ? dark : light;
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
