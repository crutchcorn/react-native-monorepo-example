import React, { Fragment } from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import { SettingsListItem, SettingsListItemProps } from "./components";
import {
  ListDivider,
  ListSubheader,
  SettingsUIContainer,
  UserHeaderContainer,
  UsernameText,
  UserProfilePicture,
} from "./settings.styles";
import { HeaderBar } from "../../components/header-bar";

interface SettingsGroup {
  id: string;
  groupName: string;
  listItems: SettingsListItemProps[];
}

interface SettingsUIProps {
  goBack: () => void;
  username: string;
  profilePicture: string | ImageSourcePropType;
  settingsGroups: SettingsGroup[];
}

export const SettingsUI = ({
  goBack,
  username,
  profilePicture,
  settingsGroups,
}: SettingsUIProps) => {
  return (
    <SettingsUIContainer>
      <HeaderBar
        headerTitle="Server Settings"
        iconNameLeft="close"
        onLeftIconPress={goBack}
      />
      <ScrollView style={{ flex: 1 }}>
        <UserHeaderContainer>
          <UserProfilePicture
            source={
              typeof profilePicture === "string"
                ? { uri: profilePicture }
                : profilePicture
            }
          />
          <UsernameText>{username}</UsernameText>
        </UserHeaderContainer>
        {settingsGroups.map((settingsGroup, i) => {
          const isFirst = i === 0;
          return (
            <Fragment key={settingsGroup.id}>
              {!isFirst && <ListDivider />}
              <ListSubheader>{settingsGroup.groupName}</ListSubheader>
              {settingsGroup.listItems.map((listItem) => (
                <SettingsListItem
                  key={listItem.id}
                  id={listItem.id}
                  IconComponent={listItem.IconComponent}
                  icon={listItem.icon}
                  onPress={listItem.onPress}
                  name={listItem.name}
                />
              ))}
            </Fragment>
          );
        })}
      </ScrollView>
    </SettingsUIContainer>
  );
};
