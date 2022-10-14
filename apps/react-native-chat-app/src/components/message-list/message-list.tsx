import React from "react";
import { UserMessage } from "../../types/message";
import { Message } from "../message";
import { MessageListContainer, MessageContainer } from "./message-list.styles";

interface MessageListProps {
  messages: UserMessage[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <MessageListContainer>
      {messages.map((message, i) => {
        return (
          <MessageContainer key={message.id} isFirst={i === 0}>
            <Message message={message} />
          </MessageContainer>
        );
      })}
    </MessageListContainer>
  );
};
