import { useTheme } from "../../hooks";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  HeaderBarContainer,
  IconButton,
  HeaderText,
} from "./header-bar.styles";

interface HeaderBarProps {
  headerTitle: string;
  iconNameLeft?: string;
  iconNameRight?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}

export const HeaderBar = ({
  headerTitle,
  onLeftIconPress,
  iconNameLeft,
  onRightIconPress,
  iconNameRight,
}: HeaderBarProps) => {
  const theme = useTheme();
  return (
    <HeaderBarContainer>
      {iconNameLeft && <IconButton onPress={onLeftIconPress}>
        <Icon name={iconNameLeft} size={24} color={theme.foreground_tertiary} />
      </IconButton>}
      <HeaderText>{headerTitle}</HeaderText>
      {iconNameRight && <IconButton onPress={onRightIconPress}>
        <Icon name={iconNameRight} size={20} color={theme.foreground_tertiary} />
      </IconButton>}
    </HeaderBarContainer>
  );
};
