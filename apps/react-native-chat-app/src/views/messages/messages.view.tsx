import React from "react";

import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootScreenProps } from "../../navigators/root";
import { useMutation } from "@tanstack/react-query";
import { addMessage, MessagesUI, useMessages } from "@crutchcorn/shared-elements";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const crutchcornPicture = require("../../assets/crutchcorn.jpg");

export const MessagesView = () => {
  const navigation = useNavigation<RootScreenProps<"Messages">>();

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
        profilePicture: crutchcornPicture,
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
      onMenuPress={() => navigation.navigate("Settings")}
      messageListRef={messageListRef}
    />
  );
};
