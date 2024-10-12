import styles from './styles';

import React, {useEffect, useState} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';

import Product from '@/components/Product';
import {IProduct} from '@/types/utils/Info';
import Text from '@/components/Text';
import Styles from '@/theme/style';
import {getRandomProducts} from '@/utils/products';

type Props = {
  title: string;
};

const ProductsInATitle = ({title}: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  const renderProduct: ListRenderItem<IProduct> = ({item, index}) => {
    return (
      <Product
        containerStyle={{marginStart: index === 0 ? 0 : Styles.hs(12)}}
        data={item}
      />
    );
  };

  return (
    <View style={{marginTop: Styles.vs(Styles.spacing.r)}}>
      <Text.H typography="semiBold" style={styles.title}>
        {title}
      </Text.H>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderProduct}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default ProductsInATitle;
