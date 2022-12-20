import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import {RoundedTextInput, ThemeProvider} from '@crutchcorn/shared-elements';

const RTextInput =  () => {
    const [value, setValue] = useState('');
    return <RoundedTextInput placeholder="Pooh" value={value} onValueChange={setValue}/>
}

const RedText = styled(Text)`
    background: red;
`;

export const Test = ({ children }: PropsWithChildren<any>) => {
    return <ThemeProvider>
        <RedText>{children}</RedText>
        <RTextInput/>
    </ThemeProvider>
}