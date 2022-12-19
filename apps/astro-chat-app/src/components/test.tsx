import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const RedText = styled(Text)`
    background: red;
`;

export const Test = ({ children }: PropsWithChildren<never>) => {
    return <RedText>{children}</RedText>
}