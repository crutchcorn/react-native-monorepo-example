import { useState } from "react";
import { RoundedTextInput } from "@crutchcorn/shared-elements";
import styled from 'styled-components';

const P = styled.p`
  color: red;
`;

export default function App() {
  const [textValue, onTextValueChange] = useState("");
  return (
    <>
      <P>Testing this</P>
      <RoundedTextInput
        placeholder={"Testing"}
        value={textValue}
        onValueChange={onTextValueChange}
      />
    </>
  );
}
