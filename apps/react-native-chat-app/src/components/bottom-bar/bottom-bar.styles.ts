import { View, TextInput, TouchableHighlight } from "react-native";
import styled, { css } from "styled-components";

export const BottomBarContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 2px solid ${(props) => props.theme.background_secondary};
  background: ${(props) => props.theme.background_primary};
  padding: 8px;
`;

const iconButtonBase = css`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddMoreButton = styled(TouchableHighlight)`
  ${iconButtonBase};
  background: ${(props) => props.theme.background_secondary};
`;
export const SendButton = styled(TouchableHighlight)`
  ${iconButtonBase};
  background: ${(props) => props.theme.brand_accent};
`;
