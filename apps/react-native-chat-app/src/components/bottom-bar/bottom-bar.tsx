import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RoundedTextInput } from "@crutchcorn/shared-elements";
import {
  BottomBarContainer,
  AddMoreButton,
  SendButton,
} from "./bottom-bar.styles";

interface BottomBarProps {
  placeholder: string;
  onAddPress: () => void;
  onSendPress: () => void;
  textValue: string;
  onTextValueChange: (val: string) => void;
}

export const BottomBar = ({
  placeholder,
  onAddPress,
  onSendPress,
  textValue,
  onTextValueChange,
}: BottomBarProps) => {
  return (
    <BottomBarContainer>
      <AddMoreButton onPress={onAddPress}>
        <Icon name="add" size={24} color="#83898E" />
      </AddMoreButton>
      <RoundedTextInput
        placeholder={placeholder}
        value={textValue}
        onValueChange={onTextValueChange}
      />
      <SendButton onPress={onSendPress}>
        <Icon name="send" size={20} color="#FFFFFF" />
      </SendButton>
    </BottomBarContainer>
  );
};
