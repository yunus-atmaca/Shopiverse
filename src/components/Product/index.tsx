import styles from './styles';

import Header from './Header';

import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import ProductImages from '@/components/ProductImages';
import {IProduct} from '@/types/utils/Info';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  data: IProduct;
};

const Product = ({data, containerStyle}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: theme.boxBG, borderColor: theme.border},
      ]}>
      <ProductImages imgs={data.images} containerStyle={styles.images} />
      <View style={{flex: 1}}>
        <Text.H
          numberOfLines={1}
          style={styles.title}
          typography="semiBold"
          size={12}>
          {data.brand}
          <Text.H size={12} color={theme.textSub} typography="regular">
            {`  ${data.title}`}
          </Text.H>
        </Text.H>
        <Text.P
          style={{flex: 1}}
          numberOfLines={1}
          color={theme.textSub}
          size={10}>
          {data.desc}
        </Text.P>
      </View>
      <Text.H
        style={{
          textDecorationLine: data.discountedPrice ? 'line-through' : 'none',
        }}
        size={14}
        typography={data.discountedPrice ? 'semiBold' : 'bold'}
        color={data.discountedPrice ? theme.textSub : theme.textHighlighted}>
        {data.price}
        {data.discountedPrice && (
          <Text.H
            style={{textDecorationLine: 'none'}}
            color={theme.textHighlighted}
            typography="bold"
            size={14}>
            {`  ${data.discountedPrice}`}
          </Text.H>
        )}
      </Text.H>
      <Header id={data.id} starRate={data.start_rate} />
    </View>
  );
};

export default Product;
