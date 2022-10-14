import React from "react";
import { ScrollView, View } from "react-native";

import { MessageList } from "../../components/message-list";
import { BottomBar } from "../../components/bottom-bar";
import { HeaderBar } from "../../components/header-bar";
import { UserMessage } from "../../types/message";
import { MessagesUIContainer } from "./messages.styles";

interface MessagesUIProps {
  messages: UserMessage[];
  messageText: string;
  setMessageText: (val: string) => void;
  onMenuPress: () => void;
}

export const MessagesUI = ({
  messages,
  messageText,
  setMessageText,
  onMenuPress,
}: MessagesUIProps) => {
  return (
    <MessagesUIContainer>
      <HeaderBar
        headerTitle="Corbin"
        onMenuPress={onMenuPress}
        onSearchPress={() => {}}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <MessageList messages={messages} style={{ flex: 1 }} />
      </ScrollView>
      <BottomBar
        placeholder="Message"
        onAddPress={() => {}}
        onSendPress={() => {}}
        textValue={messageText}
        onTextValueChange={setMessageText}
      />
    </MessagesUIContainer>
  );
};
