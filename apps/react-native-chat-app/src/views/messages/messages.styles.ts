import { View } from "react-native";
import styled from "styled-components";

export const MessagesUIContainer = styled(View)`
  flex: 1;
  background: ${(props) => props.theme.background_primary};
`;
