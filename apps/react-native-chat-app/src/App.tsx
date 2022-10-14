import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { Button } from "@crutchcorn/shared-elements";
import { MessageList } from "./components/message-list";
import { BottomBar } from "./components/bottom-bar";
import { HeaderBar } from "./components/header-bar";
import { UserMessage } from "./types/message";

const queryClient = new QueryClient();

// TODO: Extract to function
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const messages: UserMessage[] = [
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "1",
  },
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "2",
  },
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "3",
  },
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "4",
  },
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "5",
  },
  {
    username: "crutchcorn",
    message: "This is a test, testing to see how this all looks",
    profilePicture: require("./assets/crutchcorn.jpg"),
    date: new Date(),
    id: "6",
  },
];

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <HeaderBar/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <MessageList messages={messages} style={{ flex: 1 }} />
        </ScrollView>
        <BottomBar/>
      </SafeAreaView>
    </QueryClientProvider>
  );
};
