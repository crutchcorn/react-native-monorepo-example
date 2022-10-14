import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Messages: undefined;
  Settings: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
