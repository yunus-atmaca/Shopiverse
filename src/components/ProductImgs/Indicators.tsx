import styles from './styles';

import React from 'react';
import {View} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

type Props = {
  itemLen: number;
  posX: SharedValue<number>;
};

const INDICATOR_WIDTH = Styles.hs(16);
const DEVICE_WIDTH = Styles.device.width;
const Indicators = ({itemLen, posX}: Props) => {
  const theme = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            posX.value,
            [0, DEVICE_WIDTH],
            [0, INDICATOR_WIDTH],
          ),
        },
      ],
    };
  });

  return (
    <View pointerEvents="none" style={styles.container}>
      <View style={[styles.indicators, {backgroundColor: theme.boxBG}]}>
        {new Array(itemLen).fill(0).map((_, i) => {
          return (
            <View key={'ind-' + i} style={styles.indicatorContainer}>
              <View
                style={[
                  styles.indicator,
                  {backgroundColor: theme.indicatorUnfocused},
                ]}
              />
            </View>
          );
        })}
        <Animated.View style={[styles.animated, animatedStyle]}>
          <View
            style={[
              styles.indicator,
              {backgroundColor: theme.indicatorFocused},
            ]}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Indicators;
