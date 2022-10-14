import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { RootScreenProps } from "../../navigators/root";
import { SettingsUI } from "./settings.ui";

import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const crutchcornPicture = require('../../assets/crutchcorn.jpg');

export const SettingsView = () => {
  const navigation = useNavigation<RootScreenProps<"Settings">>();
  return <SettingsUI goBack={navigation.goBack} username={"crutchcorn"} profilePicture={crutchcornPicture}
    settingsGroups={[{
      groupName: "SETTINGS",
      listItems: [
        {
          icon: 'info',
          name: "Overview"
        },
        {
          icon: 'sword-cross',
          name: "Moderation",
          IconComponent: CommunityIcon
        },
        {
          icon: 'clipboard-text',
          name: "Audit Log",
          IconComponent: CommunityIcon
        },
        {
          icon: "comment-text-multiple-outline",
          name: "Channels",
          IconComponent: CommunityIcon
        },
        {
          icon: "gamepad-variant",
          name: "Integrations",
          IconComponent: CommunityIcon
        },
        {
          icon: "sticker-emoji",
          name: "Emoji",
          IconComponent: CommunityIcon
        },
        {
          icon: "hook",
          name: "Webhooks",
          IconComponent: CommunityIcon
        }
      ]
    },
    {
      groupName: "COMMUNITY",
      listItems: [{
        icon: "people",
        name: "Enable Community"
      }]
    }]} />;
};
