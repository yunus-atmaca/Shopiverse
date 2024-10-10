import styles from './styles';

import React from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Icon, {IconNames} from '@/components/Icon';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  icon: IconNames;
  text: string;
  onClick?: () => void;
  iconColor?: ColorValue;
  containerStyle?: StyleProp<ViewStyle>;
};

const ButtonBaseLine = ({
  onClick,
  containerStyle,
  iconColor,
  icon,
  text,
}: Props) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.border,
        },
        containerStyle,
      ]}>
      <Icon color={iconColor} name={icon} />
      <Text.P style={{marginStart: 4}} size={14}>
        {text}
      </Text.P>
    </TouchableOpacity>
  );
};

export default ButtonBaseLine;
