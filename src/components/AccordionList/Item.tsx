import styles from './styles';

import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import {randomText} from '@/utils/helpers';

const Item = () => {
  const theme = useTheme();

  const wrapper = useSharedValue(0);
  const height = useSharedValue(Styles.vs(48));
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const rotate = useSharedValue('0deg');
  const animatedStyleRotate = useAnimatedStyle(() => {
    return {
      transform: [{rotate: rotate.value}],
    };
  });

  const animation = () => {
    const opened = height.value > Styles.vs(48);

    const to = !opened ? Styles.vs(60) + wrapper.value : Styles.vs(48);
    const toDeg = !opened ? '180deg' : '0deg';
    height.value = withTiming(to, {duration: 400});
    rotate.value = withTiming(toDeg, {duration: 400})
  };

  return (
    <Animated.View
      style={[
        styles.item,
        {
          borderBottomColor: theme.borderLight,
          backgroundColor: theme.boxBG,
        },
        animatedStyle,
      ]}>
      <TouchableOpacity onPress={() => animation()} style={[styles.trigger]}>
        <Text.H>Title</Text.H>
        <Animated.View style={animatedStyleRotate}>
          <Icon size={16} name="ArrowDown" />
        </Animated.View>
      </TouchableOpacity>
      <View
        onLayout={e => {
          wrapper.value = e.nativeEvent.layout.height;
        }}
        pointerEvents="none"
        style={styles.wrapper}>
        <Text.P
          color={theme.textSub}
          size={14}
          style={{
            marginHorizontal: Styles.hs(16),
            marginBottom: Styles.vs(12),
          }}>
          {randomText(Math.floor(Math.random() * (700 - 100 + 1) + 100))}
        </Text.P>
      </View>
    </Animated.View>
  );
};

export default memo(Item, () => true);
