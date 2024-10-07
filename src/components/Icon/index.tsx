import {Props} from './types';
import styles from './styles';

import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';

import * as Icons from '@/assets/icons';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

const Icon: FC<Props> = ({
  size = 20,
  containerSize = 32,
  name,
  color,
  bgColor,
  onClick,
  containerStyle,
  isTab = false,
}) => {
  const theme = useTheme();

  const icColor = color ?? theme.icon;
  const icContainerBg = isTab ? 'transparent' : bgColor ?? theme.iconBackground;
  const icSize = Styles.hs(size);
  const icContainerSize = Styles.hs(containerSize);

  if (onClick) {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            height: icContainerSize,
            width: icContainerSize,
            backgroundColor: icContainerBg,
            borderColor: isTab ? undefined : theme.border,
          },
          containerStyle,
        ]}
        activeOpacity={0.7}
        onPress={onClick}>
        <View style={{height: icSize, width: icSize}}>
          {Icons[name]({color: icColor})}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            height: icContainerSize,
            width: icContainerSize,
            backgroundColor: icContainerBg,
            borderColor: isTab ? 'transparent' : theme.border,
          },
          containerStyle,
        ]}>
        <View style={{height: icSize, width: icSize}}>
          {Icons[name]({color: icColor})}
        </View>
      </View>
    );
  }
};

export default Icon;
