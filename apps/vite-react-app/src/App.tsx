import { useState } from "react";
import type { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import { RoundedTextInput, ThemeProvider } from "@crutchcorn/shared-elements";

const RTextInput = () => {
  const [value, setValue] = useState("");
  return (
    <RoundedTextInput
      placeholder="Hello, friends"
      value={value}
      onValueChange={setValue}
    />
  );
};

const RedText = styled(Text)`
  background: red;
`;

const TextInputContainer = styled(View)`
    display: flex;
    flex-direction: row;
`

export const Test = ({ children }: PropsWithChildren<any>) => {
  return (
    <ThemeProvider>
      <View>
        <RedText>{children}</RedText>
      </View>
      <TextInputContainer>
        <RTextInput />
      </TextInputContainer>
    </ThemeProvider>
  );
};

const App = () => {
  return <Test>Testing 123</Test>
}

export default App;