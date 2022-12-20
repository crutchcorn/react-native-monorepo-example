import { TextInput } from "react-native";
import styled from "styled-components/native";

export const MessageInput = styled(TextInput)`
  width: 1px;
  flex-grow: 1;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  margin-right: 8px;
  background: ${(props) => props.theme.background_secondary};
  border-radius: 999px;
`;
