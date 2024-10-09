import styles from './styles';

import React, {FC} from 'react';
import {
  ColorValue,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import * as Icons from '@/assets/icons';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

export type IconNames = keyof typeof Icons;

export type Props = {
  name: IconNames;
  size?: number;
  containerSize?: number;
  color?: ColorValue;
  bgColor?: ColorValue;
  onClick?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  scaleFactor?: 'horizontal' | 'vertical';
  hasContainerStyle?: boolean;
};

const Icon: FC<Props> = ({
  size = 20,
  containerSize = 32,
  name,
  color,
  bgColor,
  onClick,
  containerStyle,
  hasContainerStyle = false,
}) => {
  const theme = useTheme();

  const icColor = color ?? theme.icon;
  const icContainerBg = bgColor ?? theme.iconBG;
  const icSize = Styles.hs(size);
  const icContainerSize = Styles.hs(containerSize);

  const IconContainer = onClick ? TouchableOpacity : View;

  return (
    <IconContainer
      style={[
        styles.container,
        hasContainerStyle && {
          height: icContainerSize,
          width: icContainerSize,
          backgroundColor: icContainerBg,
          borderColor: theme.borderLight,
          borderWidth: Styles.borderWidth.m,
        },
        containerStyle,
      ]}
      onPress={onClick}
      activeOpacity={0.7}>
      <View style={{height: icSize, width: icSize}}>
        {Icons[name]({color: icColor})}
      </View>
    </IconContainer>
  );
};

export default Icon;
