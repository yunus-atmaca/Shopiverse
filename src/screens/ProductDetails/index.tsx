import styles from './styles';

import Summary from './Summary';

import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import ProductImgs from '@/components/ProductImgs';
import {RootStackScreenProps} from '@/navigation';
import {IProduct} from '@/types/utils/Info';
import {getProductById} from '@/utils/products';
import Styles from '@/theme/style';
import Text from '@/components/Text';
import ProductRate from '@/components/ProductRate';
import {useTheme} from '@/hooks/theme';
import ProductColors from '@/components/ProductColors';
import ProductSizes from '@/components/ProductSizes';
import ProductFeatures from '@/components/ProductFeatures';
import ProductReviews from '@/components/ProductReviews';

const ProductDetails = ({route}: RootStackScreenProps<'ProductDetails'>) => {
  const theme = useTheme();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const _product = getProductById(route.params.productId);
    if (_product) setProduct(_product);
  }, []);

  return (
    <PageWrapper removeTop>
      <PageHeader header="Product Details" />
      {product && (
        <ScrollView
          contentContainerStyle={{paddingBottom: 96}}
          showsVerticalScrollIndicator={false}>
          <ProductImgs
            imgStyle={{
              height: Styles.device.height * 0.4,
              width: Styles.device.width,
            }}
            imgs={product.images}
          />
          <View
            style={[
              styles.content,
              {
                backgroundColor: theme.boxBG,
                borderBottomColor: theme.borderLight,
                borderTopColor: theme.borderLight,
              },
            ]}>
            <Text.H typography="semiBold">
              {product.brand}
              <Text.H>{'  ' + product.title}</Text.H>
            </Text.H>
            <Text.P color={theme.textSub} size={14}>
              {product.desc}
            </Text.P>
            <ProductRate
              containerStyle={{marginVertical: 4}}
              rate={product.start_rate}
              numberOfRate={product.numberOfRate}
            />
            <ProductColors />
            <ProductSizes />
          </View>

          <ProductFeatures />
          <ProductReviews />
        </ScrollView>
      )}
      <Summary />
    </PageWrapper>
  );
};

export default ProductDetails;
