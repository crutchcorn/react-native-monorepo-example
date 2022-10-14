import React, { useLayoutEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { addMessage, loadMessages } from "../../services/messages";
import { MessagesUI } from "./messages.ui";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootScreenProps } from "../../navigators/root";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const crutchcornPicture = require("../../assets/crutchcorn.jpg");

export const MessagesView = () => {
  const navigation = useNavigation<RootScreenProps<"Messages">>();

  const messageListRef = useRef<ScrollView>(null);

  const {
    data: messages,
    isLoading,
    refetch,
  } = useQuery(
    ["messages"],
    () => {
      return loadMessages();
    },
    {
      onSuccess: () => {
        messageListRef.current?.scrollToEnd?.();
      },
    }
  );

  const mutation = useMutation(
    (newMessage: string) => {
      return addMessage({
        message: newMessage,
        username: "crutchcorn",
        date: new Date(),
        profilePicture: crutchcornPicture,
      });
    },
    {
      onSuccess: () => refetch(),
    }
  );

  const [messageText, setMessageText] = useState("");

  // TODO: Make this nicer
  if (mutation.isError) {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          There was an error adding a message: {(mutation as any).error.message}
        </Text>
      </View>
    );
  }

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
      onSendPress={() => {
        mutation.mutate(messageText);
        setMessageText("");
      }}
      onMenuPress={() => navigation.navigate("Settings")}
      messageListRef={messageListRef}
    />
  );
};
