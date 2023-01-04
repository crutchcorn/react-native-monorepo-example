import { SettingsUI, useSettings } from "@crutchcorn/shared-elements";
import { useNavigate } from "react-router-dom";

export const SettingsView = () => {
  const navigate = useNavigate();

  const { settingsGroups } = useSettings();

  return <SettingsUI goBack={() => navigate(-1)} username={"crutchcorn"} profilePicture={"/crutchcorn.jpg"}
                     settingsGroups={settingsGroups} />;
};
