import styles from './styles';

import React from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Icon, {IconNames} from '@/components/Icon';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  icon?: IconNames;
  text: string;
  onClick?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textColor?: ColorValue;
  iconColor?: ColorValue;
};

const ButtonBaseLine = ({
  onClick,
  containerStyle,
  iconColor,
  textColor,
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
      {icon && (
        <Icon containerStyle={{marginEnd: 4}} color={iconColor} name={icon} />
      )}
      <Text.P color={textColor} size={14}>
        {text}
      </Text.P>
    </TouchableOpacity>
  );
};

export default ButtonBaseLine;
