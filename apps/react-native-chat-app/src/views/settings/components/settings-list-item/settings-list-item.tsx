import React from "react";
import { SettingName, SettingsListItemContainer } from "./settings-list-item.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@crutchcorn/shared-elements";

interface SettingsListItemProps {
    name: string;
    onPress?: () => void;
    icon: string;
}

export const SettingsListItem = ({ name,
    onPress,
    icon }) => {
    const theme = useTheme();
    return <SettingsListItemContainer onPress={onPress}>
        <Icon name={icon} size={24} color={theme.foreground_tertiary} />
        <SettingName>{name}</SettingName>
    </SettingsListItemContainer>
}