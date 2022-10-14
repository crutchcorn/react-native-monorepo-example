import { Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

export const SettingsListItemContainer = styled(TouchableHighlight)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 16px;
`

export const SettingName = styled(Text)`
    margin-left: 16px;
    color: ${props => props.theme.foreground_primary};
`