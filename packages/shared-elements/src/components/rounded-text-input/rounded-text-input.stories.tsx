import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RoundedTextInput } from "./rounded-text-input";
import { ThemeProvider } from "../theme-provider";

export default {
  title: "Components/RoundedTextInput",
  component: RoundedTextInput,
} as ComponentMeta<typeof RoundedTextInput>;

const Template: ComponentStory<typeof RoundedTextInput> = (_args) => {
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

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Placeholder",
};
