import React from "react"
import { MessageInput } from "./rounded-text-input.styles"

interface RoundedTextInputProps {
    placeholder: string;
    value: string;
    onValueChange: (val: string) => void;
}

export const RoundedTextInput = ({placeholder, value, onValueChange}: RoundedTextInputProps) => {
    return <MessageInput
        placeholder={placeholder}
        placeholderTextColor={"#83898E"}
        value={value}
        onChange={e => onValueChange(e.target.value)}
      />
}