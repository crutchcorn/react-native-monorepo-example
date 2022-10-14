import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { RootScreenProps } from "../../navigators/root";
import { SettingsUI } from "./settings.ui";
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
          icon: 'moderation',
          name: "Moderation"
        },
        {
          icon: 'audit',
          name: "Audit Log"
        },
        {
          icon: "channels",
          name: "Channels"
        },
        {
          icon: "integrations",
          name: "Integrations"
        },
        {
          icon: "emoji",
          name: "Emoji"
        },
        {
          icon: "hook",
          name: "Webhooks"
        }
      ]
    },
    {
      groupName: "COMMUNITY",
      listItems: [{
        icon: "community",
        name: "Enable Community"
      }]
    }]} />;
};
