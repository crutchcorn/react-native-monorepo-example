import { useNavigation } from "@react-navigation/native";
import { RootScreenProps } from "../../navigators/root";
import { SettingsUI, useSettings } from "@crutchcorn/shared-elements";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const crutchcornPicture = require("../../assets/crutchcorn.jpg");

export const SettingsView = () => {
  const navigation = useNavigation<RootScreenProps<"Settings">>();

  const { settingsGroups } = useSettings();

  return (
    <SettingsUI
      goBack={navigation.goBack}
      username={"crutchcorn"}
      profilePicture={crutchcornPicture}
      settingsGroups={settingsGroups}
    />
  );
};
