import { View } from "react-native";
import styled from "styled-components";

export const MessageListContainer = styled(View)`
`

export const MessageContainer = styled(View)`
  ${props => props.isFirst ? '' : 'margin-top: 18px;'}
`
