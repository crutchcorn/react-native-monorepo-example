import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderBarContainer,
  IconButton,
  HeaderText
} from "./header-bar.styles";

interface HeaderBarProps {
}

export const HeaderBar = ({}: HeaderBarProps) => {
  return (
    <HeaderBarContainer>
      <IconButton>
        <Icon name="menu" size={24} color="#83898E" />
      </IconButton>
      <HeaderText>Eduardo</HeaderText>
      <IconButton>
        <Icon name="search" size={20} color="#83898E" />
      </IconButton>
    </HeaderBarContainer>
  );
};
