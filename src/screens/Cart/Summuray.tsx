import styles from './styles/summary';

import React, {useCallback, useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Button from '@/components/Button';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Icon from '@/components/Icon';
import {ICartProduct} from '@/types/utils/Info';
import {navigationRef} from '@/navigation';

type Props = {
  products: ICartProduct[];
};

const Summary = ({products}: Props) => {
  const theme = useTheme();

  const price = useMemo(() => {
    let _price = 0;
    products.forEach(p => {
      const {discountedPrice, price} = p.product;
      if (discountedPrice) {
        _price +=
          parseFloat(discountedPrice.substring(1, discountedPrice.length)) *
          p.piece;
      } else {
        _price += parseFloat(price.substring(1, price.length)) * p.piece;
      }
    });

    return _price;
  }, [products]);

  const rotate = useSharedValue('0deg');
  const posY = useSharedValue(128);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: posY.value}],
    };
  });
  const animatedIcon = useAnimatedStyle(() => {
    return {
      transform: [{rotate: rotate.value}],
    };
  });

  const animation = useCallback(() => {
    const to = posY.value < 128 ? 128 : 0;
    const toDeg = to === 128 ? '0deg' : '180deg';

    posY.value = withTiming(to, {duration: 400});
    rotate.value = withTiming(toDeg, {duration: 400});
  }, []);

  if (products.length === 0) return null;
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.details,
          {backgroundColor: theme.boxBG, borderColor: theme.border},
          animatedStyle,
        ]}>
        <View style={styles.section}>
          <Text.P size={14}>Products</Text.P>
          <Text.P size={14}>{`$${price.toFixed(2)}`}</Text.P>
        </View>
        <View style={styles.section}>
          <Text.P size={14}>Shipping</Text.P>
          <Text.P size={14}>{'$9'}</Text.P>
        </View>
        <View
          style={[styles.separator, {backgroundColor: theme.borderLight}]}
        />
        <View style={styles.section}>
          <Text.P typography="bold" size={14}>
            Total
          </Text.P>
          <Text.P typography="bold" size={14}>
            {`$${(price + 9).toFixed(2)}`}
          </Text.P>
        </View>
      </Animated.View>
      <View
        style={[
          styles.content,
          {borderTopColor: theme.border, backgroundColor: theme.boxBG},
        ]}>
        <TouchableOpacity
          onPress={animation}
          activeOpacity={0.7}
          style={styles.total}>
          <Animated.View style={animatedIcon}>
            <Icon size={12} name="ArrowDown" />
          </Animated.View>
          <View style={{marginStart: 4}}>
            <Text.P size={10}>Total</Text.P>
            <Text.H typography="semiBold">{`$${(price + 9).toFixed(
              2,
            )}`}</Text.H>
          </View>
        </TouchableOpacity>
        <View style={{flex: 2}}>
          <Button
            onClick={() => navigationRef.navigate('Payment', {data: products})}
            text={'Confirm'}
            style={styles.approve}
          />
        </View>
      </View>
    </View>
  );
};

export default Summary;
