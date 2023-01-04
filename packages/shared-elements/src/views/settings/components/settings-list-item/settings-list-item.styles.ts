import { Text, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components/native';

export const SettingsListHighlight = styled(TouchableHighlight)`
    padding: 16px;
`

export const SettingsListItemContainer = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`

export const SettingName = styled(Text)`
    margin-left: 16px;
    color: ${props => props.theme.foreground_primary};
`

export const IconContainer = styled(View)`
    height: 24px;
    width: 24px;
    justify-content: center;
    align-items: center;
`
