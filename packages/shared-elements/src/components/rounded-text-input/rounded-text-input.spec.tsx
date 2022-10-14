import * as React from "react";
import { Text } from "react-native";
import { RoundedTextInput } from "./rounded-text-input";
import { ThemeProvider } from "../theme-provider";
import { fireEvent, render } from "@testing-library/react-native";

const renderRoundedTextInput = () => {
  const Comp = () => {
    const [value, setValue] = React.useState("");

    return (
      <ThemeProvider>
        <RoundedTextInput
          placeholder="Message"
          value={value}
          onValueChange={setValue}
        />
        <Text>Value is {value}</Text>
      </ThemeProvider>
    );
  };

  return render(<Comp/>);
};

describe("Rounded Text Input", () => {
  test("Should render an accessible placeholder", () => {
    const { getByPlaceholderText } = renderRoundedTextInput();

    expect(getByPlaceholderText("Message")).toBeTruthy();
  });

  test("Should update value when it is set", () => {
    const { getByPlaceholderText, getByText } = renderRoundedTextInput();

    const input = getByPlaceholderText("Message");
    fireEvent.changeText(input, "something I typed");
    expect(getByText("Value is something I typed")).toBeTruthy();
  });
});
