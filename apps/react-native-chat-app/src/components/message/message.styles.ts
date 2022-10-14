import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const MessageContainer = styled(View)`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`

export const ProfilePicture = styled(Image)`
  height: 56px;
  width: 56px;
  border-radius: 99px;
`;

export const MessageTextContainer = styled(View)`
  margin-left: 16px;
`;

export const MessageHeaderContainer = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: end;
`;

export const Username = styled(Text)`
  color: #3f3f40;
  font-size: 18px;
  margin-right: 12px;
`;

export const DateString = styled(Text)`
  color: #86898c;
`;

export const MessageBodyContainer = styled(View)`
  margin-top: 6px;
`;

export const MessageContents = styled(Text)`
  font-size: 16px;
  color: #3f3f40;
`;
