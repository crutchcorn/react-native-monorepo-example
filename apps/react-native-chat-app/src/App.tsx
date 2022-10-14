import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { MessagesView } from "./views/messages/messages.view";
import "./utils/setup-dayjs";
import { SettingsView } from "./views/settings/settings";
import { RootStack } from "./navigators/root";

const queryClient = new QueryClient();

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <RootStack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Messages" component={MessagesView} />
            <RootStack.Screen name="Settings" component={SettingsView} />
          </RootStack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
