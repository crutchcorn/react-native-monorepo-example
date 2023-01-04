import React, { MutableRefObject } from "react";
import { ScrollView } from "react-native";

import { MessageList } from "../../components/message-list";
import { BottomBar } from "../../components/bottom-bar";
import { HeaderBar } from "../../components/header-bar";
import { UserMessage } from "../../types/message";
import { MessagesUIContainer } from "./messages.styles";

export interface MessagesUIProps {
  messages: UserMessage[];
  messageText: string;
  setMessageText: (val: string) => void;
  onMenuPress: () => void;
  onSendPress: () => void;
  messageListRef: MutableRefObject<ScrollView | null>;
}

export const MessagesUI = ({
  messages,
  messageText,
  setMessageText,
  onMenuPress,
  onSendPress,
  messageListRef,
}: MessagesUIProps) => {
  return (
    <MessagesUIContainer>
      <HeaderBar
        headerTitle="Corbin"
        iconNameLeft="menu"
        iconNameRight="search"
        onLeftIconPress={onMenuPress}
        onRightIconPress={() => {
          console.log("Hi");
        }}
      />
      <ScrollView
        ref={messageListRef}
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <MessageList messages={messages} style={{ flex: 1 }} />
      </ScrollView>
      <BottomBar
        placeholder="Message"
        onAddPress={() => {
          console.log("Hi");
        }}
        onSendPress={onSendPress}
        textValue={messageText}
        onTextValueChange={setMessageText}
      />
    </MessagesUIContainer>
  );
};
