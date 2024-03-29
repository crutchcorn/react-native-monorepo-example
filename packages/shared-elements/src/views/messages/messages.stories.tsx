import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ThemeProvider } from "../../components/theme-provider";
import { MessagesUI } from "./messages.ui";

export default {
  title: "Views/Messages",
  component: MessagesUI,
} as Meta<typeof MessagesUI>;

const Template: StoryFn<typeof MessagesUI> = (_args) => {
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

export const Primary = {
  render: Template,
  args: {},
};
