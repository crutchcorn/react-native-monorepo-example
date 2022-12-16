import { useState } from "react";
import { RoundedTextInput } from "@crutchcorn/shared-elements";

export default function App() {
  const [textValue, onTextValueChange] = useState("");
  return (
    <RoundedTextInput
      placeholder={"Testing"}
      value={textValue}
      onValueChange={onTextValueChange}
    />
  );
}
