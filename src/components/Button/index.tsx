import styles from './styles';

import React from 'react';
import {
  StyleProp,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  text?: string;
};

const Button = ({
  text = 'Button',
  ...props
}: Props & TouchableHighlightProps) => {
  const theme = useTheme();

  const isDisabled = props.disabled;
  return (
    <TouchableHighlight
      underlayColor={theme.buttonPressed}
      onPress={() => {
        console.debug('Clicked');
      }}
      activeOpacity={0.7}
      {...props}
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
