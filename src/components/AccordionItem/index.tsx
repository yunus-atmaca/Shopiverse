import styles, {ITEM_HEIGHT} from './styles';

import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Styles from '@/theme/style';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import {randomText} from '@/utils/helpers';

type Props = {
  title: string;
  children?: ReactNode;
};

const AccordionItem = ({title, children}: Props) => {
  const theme = useTheme();

  const wrapper = useSharedValue(0);
  const height = useSharedValue(ITEM_HEIGHT);
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
    const opened = height.value > ITEM_HEIGHT;

    const to = !opened ? Styles.vs(60) + wrapper.value : ITEM_HEIGHT;
    const toDeg = !opened ? '180deg' : '0deg';
    height.value = withTiming(to, {duration: 400});
    rotate.value = withTiming(toDeg, {duration: 400});
  };

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <TouchableOpacity onPress={() => animation()} style={[styles.trigger]}>
        <Text.H>{title}</Text.H>
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
        {children}
      </View>
    </Animated.View>
  );
};

export default AccordionItem;
