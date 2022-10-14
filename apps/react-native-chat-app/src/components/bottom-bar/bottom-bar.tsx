import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RoundedTextInput, useTheme } from "@crutchcorn/shared-elements";
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
  const theme = useTheme();
  return (
    <BottomBarContainer>
      <AddMoreButton
        onPress={onAddPress}
        accessibilityLabel="Send an attachment"
      >
        <Icon name="add" size={24} color={theme.foreground_tertiary} />
      </AddMoreButton>
      <RoundedTextInput
        placeholder={placeholder}
        value={textValue}
        onValueChange={onTextValueChange}
      />
      <SendButton onPress={onSendPress} accessibilityLabel="Send message">
        <Icon name="send" size={20} color={theme.brand_on_accent} />
      </SendButton>
    </BottomBarContainer>
  );
};
