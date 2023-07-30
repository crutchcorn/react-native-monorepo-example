import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { RoundedTextInput } from "./rounded-text-input";
import { ThemeProvider } from "../theme-provider";

export default {
  title: "Components/RoundedTextInput",
  component: RoundedTextInput,
} as Meta<typeof RoundedTextInput>;

const Template: StoryFn<typeof RoundedTextInput> = (_args) => {
  const [value, setValue] = useState("");

  return (
    <ThemeProvider>
      <div style={{ width: 300, display: "flex" }}>
        <RoundedTextInput
          value={value}
          onValueChange={setValue}
          placeholder={"Placeholder"}
        />
      </div>
    </ThemeProvider>
  );
};

export const Primary = {
  render: Template,

  args: {
    placeholder: "Placeholder",
  },
};
