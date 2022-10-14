import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  BottomBarContainer,
  AddMoreButton,
  MessageInput,
  SendButton,
} from "./bottom-bar.styles";

interface BottomBarProps {
  placeholder: string;
  onAddPress: () => void;
  onSendPress: () => void;
}

export const BottomBar = ({
  placeholder,
  onAddPress,
  onSendPress,
}: BottomBarProps) => {
  return (
    <BottomBarContainer>
      <AddMoreButton onPress={onAddPress}>
        <Icon name="add" size={24} color="#83898E" />
      </AddMoreButton>
      <MessageInput
        placeholder={placeholder}
        placeholderTextColor={"#83898E"}
      />
      <SendButton onPress={onSendPress}>
        <Icon name="send" size={20} color="#FFFFFF" />
      </SendButton>
    </BottomBarContainer>
  );
};
