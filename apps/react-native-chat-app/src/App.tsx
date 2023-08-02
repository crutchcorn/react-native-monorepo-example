import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { MessagesView } from "./views/messages/messages.view";
import { SettingsView } from "./views/settings/settings.view";
import { RootStack } from "./navigators/root";
import { ThemeProvider } from "@crutchcorn/shared-elements/mobile";
import styled from "styled-components/native";

const queryClient = new QueryClient();

const AppSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background_primary};
`;

export const AppBase = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppSafeAreaView>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <RootStack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Messages" component={MessagesView} />
            <RootStack.Screen name="Settings" component={SettingsView} />
          </RootStack.Navigator>
        </AppSafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppBase />
    </ThemeProvider>
  );
};
