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
import { Message } from "./components/message";

const queryClient = new QueryClient();

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Message />
          <Message />
          <Message />
          <Message />

          {/* <Text>This is a button</Text>
          <Button title="Testing" /> */}
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};
