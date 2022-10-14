import React from "react";
import { View } from "react-native";
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
const crutchcornImg = require("../../assets/crutchcorn.jpg");

export const Message = () => {
  return (
    <MessageContainer>
      <ProfilePicture source={crutchcornImg} />
      <MessageTextContainer>
        <MessageHeaderContainer>
          <Username>crutchcorn</Username>
          <DateString>Today at 7:19PM</DateString>
        </MessageHeaderContainer>
        <MessageBodyContainer>
          <MessageContents>
            The quick brown fox jumps over the lazy dog! Hello world, how are you doing this very fine day?
          </MessageContents>
        </MessageBodyContainer>
      </MessageTextContainer>
    </MessageContainer>
  );
};
