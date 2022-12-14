import React from "react";
import { useTheme } from "../../hooks";
import { MessageInput } from "./rounded-text-input.styles";

export interface RoundedTextInputProps {
  placeholder: string;
  value: string;
  onValueChange: (val: string) => void;
}

export const RoundedTextInput = ({
  placeholder,
  value,
  onValueChange,
}: RoundedTextInputProps) => {
  const theme = useTheme();
  return (
    <MessageInput
      placeholder={placeholder}
      placeholderTextColor={theme.foreground_tertiary}
      value={value}
      onChangeText={onValueChange}
    />
  );
};
