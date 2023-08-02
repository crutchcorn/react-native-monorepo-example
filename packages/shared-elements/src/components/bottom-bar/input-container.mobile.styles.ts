import styled from "styled-components/native";
import { View } from "react-native";

// For interop with the web
interface BottomBarContainerProps {
  onSubmit?: (e: unknown) => void;
}

export const BottomBarContainerMobile = styled(View)<BottomBarContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 2px solid ${(props) => props.theme.background_secondary};
  background: ${(props) => props.theme.background_primary};
  padding: 8px;
`;
