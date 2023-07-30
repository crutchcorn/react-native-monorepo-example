import dayjs from "dayjs";
import React, { useMemo } from "react";
import { UserMessage } from "../../types/message";
import {
  DateString,
  MessageBodyContainer,
  MessageContainer,
  MessageContents,
  MessageHeaderContainer,
  MessageTextContainer,
  ProfilePicture,
  Username,
} from "./message.styles";

interface MessageProps {
  message: UserMessage;
}

export const Message = ({ message }: MessageProps) => {
  const displayedDate = useMemo(() => {
    const dayJsDay = dayjs(message.date);
    const relativeDate = dayJsDay.fromNow();
    const time = dayJsDay.format("H:mm A");
    return `${relativeDate} at ${time}`;
  }, [message]);

  return (
    <MessageContainer>
      <ProfilePicture
        source={
          typeof message.profilePicture === "string"
            ? { uri: message.profilePicture }
            : message.profilePicture
        }
      />
      <MessageTextContainer>
        <MessageHeaderContainer>
          <Username numberOfLines={1}>{message.username}</Username>
          <DateString numberOfLines={1}>{displayedDate}</DateString>
        </MessageHeaderContainer>
        <MessageBodyContainer>
          <MessageContents>{message.message}</MessageContents>
        </MessageBodyContainer>
      </MessageTextContainer>
    </MessageContainer>
  );
};
