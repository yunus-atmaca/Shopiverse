import styles from './styles';

import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS, useSharedValue} from 'react-native-reanimated';

import {useTheme} from '@/hooks/theme';
import {navigationRef} from '@/navigation';

type Props = {
  imgs: ImageSourcePropType[];
  containerStyle: StyleProp<ViewStyle>;
};

const ProductImages = ({imgs, containerStyle}: Props) => {
  const theme = useTheme();

  const index = useSharedValue(0);
  const [current, setCurrent] = useState(0);

  const initialTouchLocation = useSharedValue<{x: number; y: number}>({
    x: 0,
    y: 0,
  });

  const panGesture = Gesture.Pan()
    .manualActivation(true)
    .onTouchesDown(evt => {
      initialTouchLocation.value = {
        x: evt.changedTouches[0].x,
        y: evt.changedTouches[0].y,
      };
      //console.debug('onTouchesDown -> ', initialTouchLocation.value);
    })
    .onTouchesMove((evt, state) => {
      if (!initialTouchLocation.value || !evt.changedTouches.length) {
        state.fail();
        return;
      }

      const xDiff = Math.abs(
        evt.changedTouches[0].x - initialTouchLocation.value.x,
      );
      const yDiff = Math.abs(
        evt.changedTouches[0].y - initialTouchLocation.value.y,
      );
      const isHorizontalPanning = xDiff > yDiff;

      if (isHorizontalPanning) {
        state.activate();
      } else {
        state.fail();
      }
    })
    .onTouchesUp(evt => {
      const xDiff = Math.abs(
        evt.changedTouches[0].x - initialTouchLocation.value.x,
      );
      const yDiff = Math.abs(
        evt.changedTouches[0].y - initialTouchLocation.value.y,
      );

      if (xDiff <= 3 && yDiff <= 3) {
        //Click
      }
    })
    .onEnd(({translationX}) => {
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
      <View style={containerStyle}>
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

export default ProductImages;
