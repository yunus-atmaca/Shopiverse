import styles from './styles';

import React from 'react';
import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  text?: string;
  loading?: boolean;
  onClick?: () => void;
};

const Button = ({
  text = 'Button',
  loading = false,
  onClick,
  ...props
}: Props & TouchableHighlightProps) => {
  const theme = useTheme();

  if (props.onPress) {
    throw new Error('use onClick instead of onPress');
  }

  const _onPress = () => {
    if (onClick) onClick();
  };

  const isDisabled = props.disabled;
  return (
    <TouchableHighlight
      underlayColor={theme.buttonPressed}
      activeOpacity={0.7}
      {...props}
      onPress={_onPress}
      style={[
        styles.container,
        props.style,
        {backgroundColor: isDisabled ? theme.buttonDisabled : theme.button},
      ]}>
      <Text.P
        color={isDisabled ? theme.buttonTextDisabled : theme.buttonText}
        typography="bold">
        {text}
      </Text.P>
    </TouchableHighlight>
  );
};

export default Button;
