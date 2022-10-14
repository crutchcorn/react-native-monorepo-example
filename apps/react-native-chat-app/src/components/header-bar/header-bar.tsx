import { useTheme } from "@crutchcorn/shared-elements";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  HeaderBarContainer,
  IconButton,
  HeaderText,
} from "./header-bar.styles";

interface HeaderBarProps {
  headerTitle: string;
  onMenuPress: () => void;
  onSearchPress: () => void;
}

export const HeaderBar = ({
  headerTitle,
  onMenuPress,
  onSearchPress,
}: HeaderBarProps) => {
  const theme = useTheme();
  return (
    <HeaderBarContainer>
      <IconButton onPress={onMenuPress}>
        <Icon name="menu" size={24} color={theme.foreground_tertiary} />
      </IconButton>
      <HeaderText>{headerTitle}</HeaderText>
      <IconButton onPress={onSearchPress}>
        <Icon name="search" size={20} color={theme.foreground_tertiary} />
      </IconButton>
    </HeaderBarContainer>
  );
};
