import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { loadMessages } from "../../services/messages";
import { MessagesUI } from "./messages.ui";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {RootScreenProps} from '../../navigators/root';

export const MessagesView = () => {
  const navigation = useNavigation<RootScreenProps<"Messages">>();

  const { data: messages, isLoading } = useQuery(["messages"], () => {
    return loadMessages();
  });

  const [messageText, setMessageText] = useState("");

  // TODO: Make this nicer
  if (isLoading)
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <MessagesUI
      messages={messages!}
      messageText={messageText}
      setMessageText={setMessageText}
      onMenuPress={() => navigation.navigate("Settings")}
    />
  );
};
