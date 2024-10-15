import styles from './styles/products';

import React from 'react';
import {View} from 'react-native';

import {ICartProduct} from '@/types/utils/Info';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';

type Props = {
  data: ICartProduct[];
};

const Products = ({data}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.boxBG,
          borderColor: theme.border,
        },
      ]}>
      <Text.H>Products</Text.H>
      {data.map(d => {
        const {
          product: {brand, title, discountedPrice, price},
          piece,
        } = d;
        return (
          <View key={d.product.id} style={styles.product}>
            <View style={styles.title}>
              <Text.H typography="semiBold" size={14}>
                {brand}
                <Text.H color={theme.textSub} typography="regular">
                  {'  ' + title}
                </Text.H>
              </Text.H>
            </View>
            <View style={styles.price}>
              <Text.H typography="bold" color={theme.textHighlighted}>
                {discountedPrice || price}
                <Text.H color={theme.textSub} size={12}>{`  x${piece}`}</Text.H>
              </Text.H>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Products;
