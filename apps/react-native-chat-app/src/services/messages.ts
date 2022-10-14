import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserMessage } from "../types/message";
import { v4 as uuidv4 } from "uuid";

const messagesKey = "MESSAGES";

export const loadMessages = async () => {
  const data = await AsyncStorage.getItem(messagesKey);
  if (!data) return [];
  console.log({ data });
  return JSON.parse(data) as UserMessage[];
};

export const addMessage = async (message: Omit<UserMessage, "id">) => {
  const messages = await loadMessages();
  const newMessages = [
    ...messages,
    {
      ...message,
      id: uuidv4(),
    },
  ];
  await AsyncStorage.setItem(messagesKey, JSON.stringify(newMessages));
};
