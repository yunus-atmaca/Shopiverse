import {useTheme} from '@/hooks/theme';
import styles from './styles/summary';

import React from 'react';
import {View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import safeAreaInsets from '@/utils/safeAreaInstents';
import Text from '@/components/Text';
import Button from '@/components/Button';
import {useAppDispatch} from '@/hooks/stores';
import {IProduct} from '@/types/utils/Info';
import {addProductToCart} from '@/stores/controllers/user';
import {navigationRef} from '@/navigation';

type Props = {
  product: IProduct;
};

const Summary = ({product}: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addProductToCart(product));
    navigationRef.goBack();
    navigationRef.navigate('Cart');
  };

  const {discountedPrice, price} = product;
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        const defIn = safeAreaInsets(insets);

        return (
          <View
            style={[
              styles.container,
              {borderColor: theme.border},
              {paddingBottom: defIn.bottom + 10},
              {backgroundColor: theme.boxBG},
            ]}>
            <View style={{flex: 1}}>
              <Text.H
                color={discountedPrice ? theme.textSub : undefined}
                style={{
                  textDecorationLine: discountedPrice ? 'line-through' : 'none',
                }}
                typography={
                  discountedPrice ? 'semiBold' : 'bold'
                }>{`${price}`}</Text.H>
              {discountedPrice && (
                <Text.H typography="bold">{`${discountedPrice}`}</Text.H>
              )}
            </View>
            <View style={{flex: 1}}>
              <Button
                onClick={onAddToCart}
                style={{marginEnd: 0}}
                text={'Add to Cart'}
              />
            </View>
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Summary;
