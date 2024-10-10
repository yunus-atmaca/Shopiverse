import styles from './styles';
import {CARD_HEIGHT, CARD_WIDTH} from './helper';
import {Focus} from './types';

import Front from './Front';
import Back from './Back';

import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import cardValidator from 'card-validator';

import {ICreditCard} from '@/types/utils/Info';
import ButtonBaseLine from '@/components/ButtonBaseLine';
import {useTheme} from '@/hooks/theme';
import {navigationRef} from '@/navigation';

type Props = {
  data: ICreditCard;
  onDelete?: (card: ICreditCard) => void;
};

const Display = ({data, onDelete}: Props) => {
  const theme = useTheme();

  const [focus, setFocus] = useState<Focus>(Focus.CARD_NUMBER);

  const rotateY = useSharedValue('0deg');
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{skewX: rotateY.value}]};
  });

  const rotate = useCallback((to: string) => {
    rotateY.value = withTiming(to, {
      duration: 400,
      easing: Easing.linear,
    });
  }, []);

  const {number, holderName, expireDate, cvv} = data;
  const validator = cardValidator.number(number);
  const cardType = validator.card?.type;
  const isFront = focus === Focus.CARD_NUMBER;
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            height: CARD_HEIGHT,
            width: CARD_WIDTH,
          },
          animatedStyle,
        ]}>
        <Front
          focus={focus}
          cardNumber={number}
          cardHolderName={holderName}
          cardExpireDate={expireDate}
          type={cardType}
        />
        <Back focus={focus} cvv={cvv} type={cardType} />
      </Animated.View>

      <View style={[styles.buttons, {marginTop: 12}]}>
        <ButtonBaseLine
          onClick={() => {
            if (isFront) setFocus(Focus.CVV);
            else setFocus(Focus.CARD_NUMBER);

            rotate(isFront ? '180deg' : '0');
          }}
          icon={isFront ? 'ArrowTurnDown' : 'ArrowTurnUp'}
          text={'Turn it over'}
          containerStyle={{marginEnd: 12}}
        />

        <ButtonBaseLine
          onClick={() => {
            navigationRef.navigate('AddCreditCard', {
              creditCard: data,
            });
          }}
          icon="Edit"
          text={'Edit'}
          containerStyle={{marginEnd: 12}}
        />

        <ButtonBaseLine
          onClick={() => {
            if (onDelete) onDelete(data);
          }}
          iconColor={theme.iconError}
          icon="Delete"
          text={'Delete'}
          containerStyle={{marginEnd: 12}}
        />
      </View>
    </View>
  );
};

export default Display;
