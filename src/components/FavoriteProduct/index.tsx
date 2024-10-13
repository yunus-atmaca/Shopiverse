import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import {IProduct} from '@/types/utils/Info';
import {useTheme} from '@/hooks/theme';

import ProductImages from '@/components/ProductImages';
import Text from '@/components/Text';
import ProductRate from '@/components/ProductRate';
import ButtonBaseLine from '@/components/ButtonBaseLine';

type Props = {
  data: IProduct;
};

const FavoriteProduct = ({data}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.boxBG, borderColor: theme.borderLight},
      ]}>
      <ProductImages imgs={data.images} containerStyle={styles.image} />
      <View style={styles.info}>
        <Text.H numberOfLines={1} typography="semiBold" size={14}>
          {data.brand}
        </Text.H>
        <Text.H numberOfLines={1} color={theme.textSub} size={14}>
          {data.title}
        </Text.H>
        <Text.H numberOfLines={2} color={theme.textSub} size={12}>
          {data.desc}
        </Text.H>
        <ProductRate numberOfRate={data.numberOfRate} rate={data.start_rate} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{alignSelf: 'flex-end'}}>
            <Text.H
              style={{
                textDecorationLine: data.discountedPrice
                  ? 'line-through'
                  : 'none',
              }}
              color={
                data.discountedPrice ? theme.textSub : theme.textHighlighted
              }
              typography={data.discountedPrice ? 'semiBold' : 'bold'}
              size={14}>
              {data.price}
            </Text.H>
            {data.discountedPrice && (
              <Text.H color={theme.textHighlighted} typography="bold" size={14}>
                {data.discountedPrice}
              </Text.H>
            )}
          </View>
          <ButtonBaseLine
            containerStyle={{
              alignSelf: 'flex-end',
              borderColor: theme.borderHighlighted,
            }}
            iconColor={theme.iconHighlighted}
            textColor={theme.textHighlighted}
            icon="Cart"
            text="Add to Cart"
          />
        </View>
      </View>
    </View>
  );
};

export default FavoriteProduct;
