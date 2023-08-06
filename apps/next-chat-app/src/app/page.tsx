"use client";
import styled from "styled-components";
import { useState } from "react";
import {
  RoundedTextInput,
  ThemeProvider,
} from "@crutchcorn/shared-elements/web";

const P = styled.p`
  color: red;
`;

const Container = styled.div`
  display: flex;
`;

export default function Home() {
  const [textValue, onTextValueChange] = useState("");

  return (
    <ThemeProvider>
      <P>Testing this</P>
      <Container>
        <RoundedTextInput
          placeholder={"Testing"}
          value={textValue}
          onValueChange={onTextValueChange}
        />
      </Container>
    </ThemeProvider>
  );
}
