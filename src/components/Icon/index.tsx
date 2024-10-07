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
}) => {
  const theme = useTheme();

  const icColor = color ?? theme.icon;
  const icContainerBg = bgColor ?? theme.iconBackground;
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
            borderColor: theme.borderColor,
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
            borderColor: theme.borderColor,
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
