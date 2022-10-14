import * as React from "react";
import { ThemeProvider } from "@crutchcorn/shared-elements";
import { fireEvent, render } from "@testing-library/react-native";
import { MessagesView } from "./messages.view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// TODO: Move to setup-after-env
import "../../utils/polyfills";

const renderMessagesPage = () => {
  const queryClient = new QueryClient();

  const RootStack = createNativeStackNavigator();

  // TODO: move 99% of this elsewhere
  return render(
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider>
          <RootStack.Navigator
            initialRouteName="Messages"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Messages" component={MessagesView} />
          </RootStack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

describe("Messages", () => {
  test("Should show a message when sent", async () => {
    const { findByPlaceholderText, findByLabelText, findByText, debug } =
      renderMessagesPage();

    const input = await findByPlaceholderText("Message");

    fireEvent.changeText(input, "Testing");

    const sendMessage = await findByLabelText("Send message");

    fireEvent.press(sendMessage);

    expect(await findByText("Testing")).toBeTruthy();
  });
});
