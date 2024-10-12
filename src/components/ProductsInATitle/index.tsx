import styles from './styles';

import React, {useEffect} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';

import Product from '@/components/Product';
import _products from '@/data/products';
import {IProduct} from '@/types/utils/Info';
import Text from '@/components/Text';
import Styles from '@/theme/style';

type Props = {
  title: string;
};

const ProductsInATitle = ({title}: Props) => {
  useEffect(() => {}, []);

  const renderProduct: ListRenderItem<IProduct> = ({item, index}) => {
    return (
      <Product
        containerStyle={{marginStart: index === 0 ? 0 : Styles.hs(12)}}
        data={item}
      />
    );
  };

  return (
    <View>
      <Text.H typography="semiBold" style={styles.title}>
        {title}
      </Text.H>
      <FlatList
        data={_products}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderProduct}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default ProductsInATitle;
