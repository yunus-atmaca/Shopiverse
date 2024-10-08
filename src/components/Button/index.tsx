import styles from './styles';

import React, {useState} from 'react';
import {
  ActivityIndicator,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  text?: string;
  onClick?: () => Promise<void>;
};

const Button = ({
  text = 'Button',
  onClick,
  ...props
}: Props & TouchableHighlightProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  if (props.onPress) {
    throw new Error('use onClick instead of onPress');
  }

  const _onPress = async () => {
    if (loading) return;
    setLoading(true);

    if (onClick) await onClick();

    setLoading(false);
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
      {loading ? (
        <ActivityIndicator size={'large'} color={theme.buttonText} />
      ) : (
        <Text.P
          color={isDisabled ? theme.buttonTextDisabled : theme.buttonText}
          typography="bold">
          {text}
        </Text.P>
      )}
    </TouchableHighlight>
  );
};

export default Button;
