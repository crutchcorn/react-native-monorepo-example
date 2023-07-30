import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeProvider } from "../../components/theme-provider";
import { MessagesUI } from "./messages.ui";
import "../../polyfills";

export default {
  title: "Views/Messages",
  component: MessagesUI,
} as ComponentMeta<typeof MessagesUI>;

const Template: ComponentStory<typeof MessagesUI> = (_args) => {
  const [messageText, setMessageText] = useState("");

  const messages = [
    {
      profilePicture: "https://avatars.githubusercontent.com/u/9100169",
      username: "crutchcorn",
      date: new Date(),
      message: "Hello, world",
      id: "1",
    },
  ];

  return (
    <ThemeProvider>
      <MessagesUI
        messages={messages}
        messageListRef={React.createRef()}
        messageText={messageText}
        setMessageText={setMessageText}
        onMenuPress={() => {}}
        onSendPress={() => setMessageText("")}
      />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
