import { useContext } from "react";
import { ThemeContext } from 'styled-components'
import { light } from "../constants"

export const useTheme = () => {
    const themeContext = useContext(ThemeContext) as typeof light;
    return themeContext;
}
