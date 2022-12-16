import { useState } from "react";
import { RoundedTextInput } from "@crutchcorn/shared-elements";
import { View } from "react-native";

export default function App() {
  const [textValue, onTextValueChange] = useState("");
  return (
    <RoundedTextInput
      placeholder={"Testing"}
      value={textValue}
      onValueChange={onTextValueChange}
    />
    // <View></View>
  );
}
