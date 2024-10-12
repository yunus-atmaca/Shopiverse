import styles from './styles/images';

import React, {memo, useState} from 'react';
import {Image, View} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {runOnJS, useSharedValue} from 'react-native-reanimated';

const img1 = require('@/assets/images/products/mattia-occhi1.jpg');
const img2 = require('@/assets/images/products/mattia-occhi2.jpg');
const img3 = require('@/assets/images/products/mattia-occhi3.jpg');

const imgs = [img1, img2, img3];
const Images = () => {
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
      </View>
    </GestureDetector>
  );
};

export default memo(Images, () => true);
