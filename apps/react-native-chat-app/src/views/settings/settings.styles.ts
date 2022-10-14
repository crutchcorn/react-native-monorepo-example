import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const SettingsUIContainer = styled(View)`
    background: ${props => props.theme.background_primary};
`;

export const UserHeaderContainer = styled(View)`
    padding-top: 24px
    padding: bottom: 16px;
    justify-content: center;
`;

export const UserProfilePicture = styled(Image)`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    margin-bottom: 8px;
`;

export const UsernameText = styled(Text)`
    color: ${props => props.theme.foreground_secondary};
    font-size: 14px;
`;

export const ListSubheader = styled(Text)`
    padding: 12px 16px;
    color: ${props => props.theme.foreground_secondary};
    font-weight: 600;
    font-size: 11px;
`

export const ListDivider = styled(View)`
    padding-top: 8px;
    height: 1px;
    width: 100%;
    padding-bottom: 8px;
    background: ${props => props.theme.divider};
`