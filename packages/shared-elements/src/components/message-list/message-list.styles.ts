import { View } from "react-native";
import styled from "styled-components/native";

export const MessageListContainer = styled(View)`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

interface MessageContainerProps {
  isFirst: boolean;
}

export const MessageContainer = styled(View)<MessageContainerProps>`
  ${(props) => (props.isFirst ? "" : "margin-top: 18px;")}
`;
