import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export const useSettings = () => {
  const settingsGroups = [{
    groupName: "SETTINGS",
    listItems: [
      {
        icon: "info",
        name: "Overview"
      },
      {
        icon: "sword-cross",
        name: "Moderation",
        IconComponent: CommunityIcon
      },
      {
        icon: "clipboard-text",
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
    }];

  return {settingsGroups}
};
