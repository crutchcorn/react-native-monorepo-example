import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessagesView } from "./screens/messages/messages.view";
import './utils/setup-dayjs';

const queryClient = new QueryClient();

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <MessagesView />
      </SafeAreaView>
    </QueryClientProvider>
  );
};
