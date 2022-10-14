import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { loadMessages } from "../../services/messages";
import { MessagesUI } from "./messages.ui";

export const MessagesView = () => {
  const { data: messages } = useQuery(["messages"], () => {
    return loadMessages();
  });

  const [messageText, setMessageText] = useState("");

  return (
    <MessagesUI
      messages={messages}
      messageText={messageText}
      setMessageText={setMessageText}
    />
  );
};
