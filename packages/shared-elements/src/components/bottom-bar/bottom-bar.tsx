import React, { useMemo } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDimensions, useTheme } from "../../hooks";
import { RoundedTextInput } from "../rounded-text-input";
import { AddMoreButton, SendButton } from "./bottom-bar.styles";
import { BottomBarContainerWeb } from "./input-container.web.styles";
import { BottomBarContainerMobile } from "./input-container.mobile.styles";

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
  const { isWeb } = useDimensions();
  const theme = useTheme();
  const Container = useMemo(
    () => (isWeb ? BottomBarContainerWeb : BottomBarContainerMobile),
    [isWeb],
  ) as typeof BottomBarContainerWeb;
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        onSendPress();
      }}
    >
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
    </Container>
  );
};
