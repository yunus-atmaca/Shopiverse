import {useTheme} from '@/hooks/theme';
import styles from './styles/images';

import React, {memo, useState} from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {runOnJS, useSharedValue} from 'react-native-reanimated';

type Props = {
  imgs: ImageSourcePropType[];
};
const Images = ({imgs}: Props) => {
  const theme = useTheme();
  const index = useSharedValue(0);
  const [current, setCurrent] = useState(0);

  const panGesture = Gesture.Pan().onEnd(({translationX}) => {
    const moveX = Math.abs(translationX);
    if (moveX <= 24) return;

    const newIndex = index.value + 1 * (translationX >= 0 ? -1 : 1);

    if (newIndex < 0) index.value = imgs.length - 1;
    else if (newIndex >= imgs.length) index.value = 0;
    else index.value = newIndex;

    runOnJS(setCurrent)(index.value);
  });

  return (
    <GestureDetector gesture={panGesture}>
      <View style={{width: '100%'}}>
        <Image source={imgs[current]} style={styles.img} />
        <View style={styles.indicatorsContainer}>
          <View style={[styles.indicators, {backgroundColor: theme.boxBG}]}>
            {new Array(imgs.length).fill(0).map((_, i) => {
              const isLast = i === imgs.length - 1;
              const isSelected = current === i;
              return (
                <View
                  key={'ind-' + i}
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: isSelected
                        ? theme.indicatorFocused
                        : theme.indicatorUnfocused,
                    },
                    isLast && {marginEnd: 0},
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    </GestureDetector>
  );
};

export default memo(Images, () => true);
