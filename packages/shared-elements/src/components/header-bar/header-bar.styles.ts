import { Text, TouchableHighlight, View } from "react-native";
import styled from "styled-components";

export const HeaderBarContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 4px;
`;

export const IconButton = styled(TouchableHighlight)`
  padding: 12px;
  border-radius: 4px;
`;

export const HeaderText = styled(Text)`
  margin-left: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.foreground_secondary};
  width: 1px;
  flex-grow: 1;
`;
