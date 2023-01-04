import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export const useSettings = () => {
  const settingsGroups = [{
    id: "settings",
    groupName: "SETTINGS",
    listItems: [
      {
        id: "overview",
        icon: "info",
        name: "Overview"
      },
      {
        id: "moderation",
        icon: "sword-cross",
        name: "Moderation",
        IconComponent: CommunityIcon
      },
      {
        id: "audit-log",
        icon: "clipboard-text",
        name: "Audit Log",
        IconComponent: CommunityIcon
      },
      {
        id: "channels",
        icon: "comment-text-multiple-outline",
        name: "Channels",
        IconComponent: CommunityIcon
      },
      {
        id: "integrations",
        icon: "gamepad-variant",
        name: "Integrations",
        IconComponent: CommunityIcon
      },
      {
        id: "emoji",
        icon: "sticker-emoji",
        name: "Emoji",
        IconComponent: CommunityIcon
      },
      {
        id: "webhooks",
        icon: "hook",
        name: "Webhooks",
        IconComponent: CommunityIcon
      }
    ]
  },
    {
      id: "community",
      groupName: "COMMUNITY",
      listItems: [{
        id: "enable-community",
        icon: "people",
        name: "Enable Community"
      }]
    }];

  return {settingsGroups}
};
