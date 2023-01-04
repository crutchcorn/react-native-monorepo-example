import React from "react";

import { Text, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { addMessage, MessagesUI, useMessages } from "@crutchcorn/shared-elements";
import { useNavigate } from "react-router-dom";

export const MessagesView = () => {
  const navigate = useNavigate();

  const {
    messages,
    isLoading,
    refetch,
    messageText,
    setMessageText,
    messageListRef
  } = useMessages();

  const mutation = useMutation(
    (newMessage: string) => {
      return addMessage({
        message: newMessage,
        username: "crutchcorn",
        date: new Date(),
        profilePicture: '/crutchcorn.jpg',
      });
    },
    {
      onSuccess: () => refetch(),
    }
  );

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
      onMenuPress={() => {
        navigate("/settings");
      }}
      messageListRef={messageListRef}
    />
  );
};
