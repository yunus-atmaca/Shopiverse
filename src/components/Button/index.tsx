import styles from './styles';

import React from 'react';
import {TouchableHighlight, TouchableHighlightProps} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  text?: string;
  loading?: boolean;
};

const Button = ({
  text = 'Button',
  loading = false,
  ...props
}: Props & TouchableHighlightProps) => {
  const theme = useTheme();

  const _onPress = () => {};

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
