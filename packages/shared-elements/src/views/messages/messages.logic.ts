import { ScrollView } from "react-native";
import { useRef, useState } from "react";
import { loadMessages } from "../../services/messages";
import { useQuery } from "@tanstack/react-query";

export const useMessages = () => {
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

  const [messageText, setMessageText] = useState("");

  return {
    messages,
    isLoading,
    refetch,
    messageText,
    setMessageText,
    messageListRef,
  };
};
