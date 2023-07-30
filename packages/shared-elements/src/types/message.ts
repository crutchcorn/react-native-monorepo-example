import { ImageSourcePropType } from "react-native";

export interface UserMessage {
  profilePicture: string | ImageSourcePropType;
  username: string;
  date: Date;
  message: string;
  id: string;
}
