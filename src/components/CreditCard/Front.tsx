import {
  CARD_NUMBER_WIDTH,
  CARD_NUMBER_HEIGHT,
  CARD_NUMBER_POS_X,
  CARD_NUMBER_POS_Y,
  CARDHOLDER_NAME_POS_X,
  CARDHOLDER_NAME_POS_Y,
  VALID_THRU_POS_X,
  VALID_THRU_POS_Y,
  FOOTER_FIELD_HEIGHT,
} from './helper';

import styles from './styles/front';
import {creditCardTypes, FocusWidth, CardTypes, Focus} from './types';

import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type Props = {
  type?: string;
  onFrontReady?: (field: Focus) => void;
  onFocusChange?: (focus: Focus) => void;
  focus?: Focus;
  cardNumber: string;
  cardHolderName: string;
  cardExpireDate: string;
};

const Front = ({
  cardNumber,
  cardHolderName,
  cardExpireDate,
  type,
  focus,
  onFrontReady,
  onFocusChange,
}: Props) => {
  const typeProps = useMemo(() => {
    return type ? creditCardTypes[type as CardTypes] : undefined;
  }, [type]);

  const focusPosition = useRef<FocusWidth>({
    'card-number': 0,
    'cardholder-name': 0,
    'valid-thru': 0,
    cvv: 0,
  });

  const focusWidth = useSharedValue(0);
  const focusHeight = useSharedValue(0);
  const focusPosX = useSharedValue(0);
  const focusPosY = useSharedValue(0);
  const focusAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: focusWidth.value,
      height: focusHeight.value,
      transform: [{translateX: focusPosX.value}, {translateY: focusPosY.value}],
    };
  });

  const animation = useCallback((toH: number, toW: number) => {}, []);

  useEffect(() => {
    if (focus === Focus.CARD_NUMBER) {
      focusWidth.value = CARD_NUMBER_WIDTH;
      focusHeight.value = CARD_NUMBER_HEIGHT;
      focusPosX.value = CARD_NUMBER_POS_X;
      focusPosY.value = CARD_NUMBER_POS_Y;
    } else if (focus === Focus.CARDHOLDER_NAME) {
      focusWidth.value = focusPosition.current['cardholder-name'];
      focusHeight.value = FOOTER_FIELD_HEIGHT;
      focusPosX.value = CARDHOLDER_NAME_POS_X;
      focusPosY.value = CARDHOLDER_NAME_POS_Y;
    } else if (focus === Focus.VALID_THRU) {
      focusWidth.value = focusPosition.current['valid-thru'];
      focusHeight.value = FOOTER_FIELD_HEIGHT;
      focusPosX.value = VALID_THRU_POS_X - focusPosition.current['valid-thru'];
      focusPosY.value = VALID_THRU_POS_Y;
    }
  }, [focus]);

  return (
    <View
      pointerEvents={focus !== Focus.CVV ? 'auto' : 'none'}
      style={[styles.front, {opacity: focus !== Focus.CVV ? 1 : 0}]}>
      <View style={[styles.section, styles.top]}>
        <Image
          style={styles.chipImg}
          source={require('@/assets/images/card_chip.png')}
        />
        {typeProps && (
          <Image
            style={{width: typeProps.width, height: typeProps.height}}
            source={typeProps.image}
          />
        )}
      </View>
      {
        <TouchableOpacity
          onPress={() => {
            if (onFocusChange) onFocusChange(Focus.CARD_NUMBER);
          }}
          activeOpacity={1}
          style={styles.mid}>
          <View
            onLayout={() => {
              if (onFrontReady) onFrontReady(Focus.CARD_NUMBER);
            }}
            style={styles.cardNumber}>
            <Text style={styles.cardNamerText}>
              {cardNumber || 'XXXX XXXX XXXX XXXX'}
            </Text>
          </View>
        </TouchableOpacity>
      }
      <View style={[styles.section, styles.footer]}>
        <TouchableOpacity
          onPress={() => {
            if (onFocusChange) onFocusChange(Focus.CARDHOLDER_NAME);
          }}
          activeOpacity={1}
          style={{maxWidth: '70%'}}>
          <Text style={styles.title}>Cardholder Name</Text>
          <View
            onLayout={({nativeEvent: {layout}}) => {
              focusPosition.current['cardholder-name'] = layout.width;
              if (onFrontReady) {
                onFrontReady(Focus.CARDHOLDER_NAME);
              }

              if (focus === Focus.CARDHOLDER_NAME) {
                focusWidth.value = layout.width;
              }
            }}
            style={styles.cardHolderName}>
            <Text numberOfLines={1} style={styles.footerText}>
              {cardHolderName || 'First Last'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (onFocusChange) {
              onFocusChange(Focus.VALID_THRU);
            }
          }}
          activeOpacity={1}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Valid THRU</Text>
          <View
            onLayout={({nativeEvent: {layout}}) => {
              focusPosition.current['valid-thru'] = layout.width;
              if (onFrontReady) {
                onFrontReady(Focus.VALID_THRU);
              }
            }}
            style={styles.expire}>
            <Text style={styles.footerText}>{cardExpireDate || 'MM/YY'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              top: 0,
              borderRadius: 14,
              borderWidth: 1.5,
              borderColor: 'white',
            },
            focusAnimatedStyles,
          ]}></Animated.View>
      }
    </View>
  );
};

export default Front;
