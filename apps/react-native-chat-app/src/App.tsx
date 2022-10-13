import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";

import { Button } from "@crutchcorn/shared-elements";

export const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>This is a button</Text>
        <Button title="Testing" />
      </ScrollView>
    </SafeAreaView>
  );
};
