import React from "react";
import {
  ScrollView,
  View,
} from "react-native";

import { MessageList } from "../../components/message-list";
import { BottomBar } from "../../components/bottom-bar";
import { HeaderBar } from "../../components/header-bar";
import { UserMessage } from "../../types/message";

interface MessagesUIProps {
    messages: UserMessage[];
    messageText: string;
    setMessageText: (val: string) => void;
}

export const MessagesUI = ({messages,messageText,
    setMessageText }) => {
  return (
    <View>
      <HeaderBar
        headerTitle="Corbin"
        onMenuPress={() => {}}
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
    </View>
  );
};
