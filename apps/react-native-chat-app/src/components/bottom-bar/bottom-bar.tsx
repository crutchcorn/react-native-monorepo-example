import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  BottomBarContainer,
  AddMoreButton,
  MessageInput,
  SendButton
} from "./bottom-bar.styles";

interface BottomBarProps {
}

export const BottomBar = ({}: BottomBarProps) => {
  return (
    <BottomBarContainer>
      <AddMoreButton>
        <Icon name="add" size={24} color="#83898E" />
      </AddMoreButton>
      <MessageInput placeholder="Message" placeholderTextColor={"#83898E"}/>
      <SendButton>
        <Icon name="send" size={20} color="#FFFFFF" />
      </SendButton>
    </BottomBarContainer>
  );
};
