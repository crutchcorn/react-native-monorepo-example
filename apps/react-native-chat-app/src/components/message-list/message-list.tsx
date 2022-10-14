import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { UserMessage } from "../../types/message";
import { Message } from "../message";
import { MessageListContainer, MessageContainer } from "./message-list.styles";

interface MessageListProps {
  messages: UserMessage[];
  style?: StyleProp<ViewStyle>
}

export const MessageList = ({ messages, style }: MessageListProps) => {
  console.log({messages})
  return (
    <MessageListContainer style={style}>
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
