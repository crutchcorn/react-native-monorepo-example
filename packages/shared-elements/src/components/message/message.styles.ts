import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

export const MessageContainer = styled(View)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
`;

export const ProfilePicture = styled(Image)`
  height: 40px;
  width: 40px;
  border-radius: 99px;
`;

export const MessageTextContainer = styled(View)`
  margin-left: 12px;
  width: 1px;
  flex-grow: 1;
`;

export const MessageHeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const Username = styled(Text)`
  color: ${(props) => props.theme.foreground_secondary};
  font-size: 18px;
  margin-right: 12px;
  width: 1px;
  flex-grow: 1;
  font-weight: 500;
`;

export const DateString = styled(Text)`
  color: ${(props) => props.theme.foreground_tertiary};
  width: 40%;
`;

export const MessageBodyContainer = styled(View)`
  margin-top: 6px;
`;

export const MessageContents = styled(Text)`
  font-size: 16px;
  color: ${(props) => props.theme.foreground_secondary};
  flex-shrink: 1;
`;
