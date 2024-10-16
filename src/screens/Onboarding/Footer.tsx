import styles from './styles';

import React, {memo, useState} from 'react';
import {View} from 'react-native';

import Button from '@/components/Button';
import Animated, {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import Styles from '@/theme/style';
import {useTheme} from '@/hooks/theme';

type Props = {
  posX: SharedValue<number>;
  itemLen: number;
  buttonTexts: string[];
  onNext: (current: number) => void;
};

const {
  device: {width},
  hs,
} = Styles;

const inputRange = [0, width, width * 2, width * 3, width * 4];
const getOutputRange = (index: number) => {
  const outputRange: number[] = [];
  for (let i = 0; i < 5; ++i) {
    if (i === index) outputRange.push(hs(24));
    else outputRange.push(hs(6));
  }
  return outputRange;
};

type IndicatorProps = {
  index: number;
  posX: SharedValue<number>;
};

const Indicator = memo(
  ({index, posX}: IndicatorProps) => {
    const outputRange = getOutputRange(index);
    const theme = useTheme();

    const animatedStyle = useAnimatedStyle(() => {
      return {
        width: interpolate(posX.value, inputRange, outputRange),
      };
    });

    return (
      <Animated.View
        style={[
          styles.indicator,
          animatedStyle,
          {backgroundColor: theme.indicatorFocused},
        ]}
      />
    );
  },
  () => true,
);

const Footer = ({posX, onNext, itemLen, buttonTexts}: Props) => {
  const [current, setCurrent] = useState(0);

  useDerivedValue(() => {
    const newVal = Math.round(posX.value / width);
    runOnJS(setCurrent)(newVal);
  });

  return (
    <View style={styles.footer}>
      <View style={styles.indicatorContainer}>
        {new Array(itemLen).fill(0).map((_, index) => {
          return (
            <Indicator index={index} posX={posX} key={'indicator-' + index} />
          );
        })}
      </View>
      <Button onClick={() => onNext(current)} text={buttonTexts[current]} />
    </View>
  );
};

export default Footer;
