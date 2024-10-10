import styles from './styles';
import {CARD_HEIGHT, CARD_WIDTH} from './helper';

import Front from './Front';
import Back from './Back';

import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import cardValidator from 'card-validator';

import {ICreditCard} from '@/types/utils/Info';
import Icon from '../Icon';
import Text from '../Text';
import {useTheme} from '@/hooks/theme';
import {Focus} from './types';

type Props = {
  data: ICreditCard;
};

const Display = ({data}: Props) => {
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
        <TouchableOpacity
          onPress={() => {
            if (isFront) setFocus(Focus.CVV);
            else setFocus(Focus.CARD_NUMBER);

            rotate(isFront ? '180deg' : '0');
          }}
          activeOpacity={0.7}
          style={[
            styles.icon,
            {
              backgroundColor: theme.boxBG,
              borderColor: theme.border,
            },
          ]}>
          <Icon name={isFront ? 'ArrowTurnDown' : 'ArrowTurnUp'} />
          <Text.P style={{marginStart: 4}} size={14}>
            Turn it over
          </Text.P>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //navigationRef.navigate('AddAddress', {address: item})
          }}
          activeOpacity={0.7}
          style={[
            styles.icon,
            {
              backgroundColor: theme.boxBG,
              borderColor: theme.border,
            },
          ]}>
          <Icon name="Edit" />
          <Text.P style={{marginStart: 4}} size={14}>
            Edit
          </Text.P>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            /*if (addresses) {
                const filtered = addresses.filter(a => a.id !== item.id);
                await Storage.set(Storage.Keys.USER_ADDRESS, filtered);
                setAddresses(filtered);
              }*/
          }}
          style={[
            styles.icon,
            {
              backgroundColor: theme.boxBG,
              borderColor: theme.border,
            },
          ]}>
          <Icon color={theme.iconError} name="Delete" />
          <Text.P style={{marginStart: 4}} size={14}>
            Delete
          </Text.P>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Display;
