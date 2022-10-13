import { Button as RNButton } from 'react-native';

interface ButtonProps {
    title: string;
}

export const Button = ({ title }: ButtonProps) => <RNButton title={title} />
