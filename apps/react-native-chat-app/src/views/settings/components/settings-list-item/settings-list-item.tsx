import React from "react";
import { IconContainer, SettingName, SettingsListHighlight, SettingsListItemContainer } from "./settings-list-item.styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@crutchcorn/shared-elements";

export interface SettingsListItemProps {
    name: string;
    onPress?: () => void;
    icon: string;
    IconComponent?: typeof Icon
}

export const SettingsListItem = ({ name,
    onPress,
    icon,
    IconComponent = Icon
}: SettingsListItemProps) => {
    const theme = useTheme();
    return <SettingsListHighlight onPress={onPress}>
        <SettingsListItemContainer>
            <IconContainer>
                <IconComponent name={icon} size={24} color={theme.foreground_tertiary} />
            </IconContainer>
            <SettingName>{name}</SettingName>
        </SettingsListItemContainer>
    </SettingsListHighlight>
}