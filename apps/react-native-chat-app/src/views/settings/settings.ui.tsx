import React from "react";
import { ScrollView } from "react-native";
import { HeaderBar } from "../../components/header-bar";
import { SettingsListItem } from "./components";
import { ListDivider, ListSubheader, SettingsUIContainer, UserHeaderContainer, UsernameText, UserProfilePicture } from "./settings.styles";

interface SettingsListItem {
    icon: string;
    name: string;
    onPress?: () => void;
}

interface SettingsGroup {
    groupName: string;
    listItems: SettingsListItem[];
}

interface SettingsUIProps {
    goBack: () => void;
    username: string;
    profilePicture: string;
    settingsGroups: SettingsGroup[];
}

export const SettingsUI = ({ goBack, username, profilePicture, settingsGroups }: SettingsUIProps) => {
    return (
        <SettingsUIContainer>
            <HeaderBar
                headerTitle="Server Settings"
                iconNameLeft="close"
                onLeftIconPress={goBack}
            />
            <ScrollView>
                <UserHeaderContainer>
                    <UserProfilePicture source={profilePicture} />
                    <UsernameText>{username}</UsernameText>
                </UserHeaderContainer>
                {
                    settingsGroups.map((settingsGroup, i) => {
                        const isFirst = i === 0;
                        return (
                            <>
                                <ListSubheader>{settingsGroup.groupName}</ListSubheader>
                                {!isFirst && <ListDivider />}
                                {settingsGroup.listItems.map(listItem =>
                                    <SettingsListItem icon={listItem.icon} onPress={listItem.onPress} name={listItem.name} />
                                )}
                            </>
                        )
                    })
                }
            </ScrollView>
        </SettingsUIContainer>
    )
}