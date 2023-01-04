import { PropsWithChildren, useMemo } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as NativeStyledThemeProvider } from "styled-components/native";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { dark, light } from "../constants";
import { useDimensions } from "../hooks";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === "dark";
  const dimensions = useDimensions();
  const theme = isDarkMode ? dark : light;
  const styledTheme = useMemo(
    () => ({ ...theme, ...dimensions }),
    [theme, dimensions]
  );
  return (
    <StyledThemeProvider theme={styledTheme}>
      <NativeStyledThemeProvider theme={styledTheme}>
        {children}
      </NativeStyledThemeProvider>
    </StyledThemeProvider>
  );
};
