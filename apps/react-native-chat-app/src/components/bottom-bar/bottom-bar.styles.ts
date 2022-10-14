import { View, TextInput, TouchableHighlight } from "react-native";
import styled, { css } from "styled-components";

export const BottomBarContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 2px solid #ebecee;
  background: white;
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
  background: #ebecee;
`;

export const MessageInput = styled(TextInput)`
  width: 1px;
  flex-grow: 1;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  margin-right: 8px;
  background: #EBECEE;
  border-radius: 999px;
`;

export const SendButton = styled(TouchableHighlight)`
  ${iconButtonBase};
  background: #5865F2;
`;
