import styles from './styles';

import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageHeader from '@/components/PageHeader';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import Coupon from '@/components/Coupon';
import {ICoupon} from '@/types/utils/Info';
import {RootStackScreenProps} from '@/navigation';

const _coupons: ICoupon[] = [
  {
    expireDate: '12/12/2024',
    brand: 'Urban Wardrobe',
    title: 'The Big Season Sale Has Started!',
    desc: "Enjoy shopping with discounts up to 50%! Amazing deals await you in our wide range of products, from shoes to clothes, electronics to home goods. Don't miss out on this opportunity, which is limited to stock, shop now and take advantage of the best discounts of the season!",
    discount: '50%',
    termOfUse: [
      'The discount code is only valid within the specified dates and cannot be used after this period.',
      'Each discount code can only be used once and cannot be applied to multiple orders.',
      'A minimum purchase amount (e.g., 100$) is required to use the discount code.',
      'If products purchased with the discount code are returned, the discount amount will not be refunded.',
      'The discount code cannot be combined with other promotions or discounts.',
      'The discount code is only valid for specified product categories or selected items.',
      'The store reserves the right to change or terminate the promotion if deemed necessary.',
    ],
    lowerLimit: undefined,
  },
  {
    expireDate: '10/11/2024',
    brand: 'Moda Mart',
    title: 'The Big Shopping Festival Sale Has Started!',
    desc: "Enjoy shopping with discounts up to 300$ on your favorite products! Amazing deals await you on fashion, shoes, accessories, and much more. Don't miss out on this limited-time offer, fill your cart now and shop at great prices!",
    discount: '300$',
    termOfUse: [
      'The discount is valid during the campaign period (e.g., October 1 - October 15).',
      'Each discount code can only be used once per user.',
      'The discount code is valid for purchases of 150$ or more.',
      'The discount is only valid for selected products or categories.',
      'This discount cannot be combined with other promotions or discounts.',
      'If products purchased using the discount are returned, the refunded amount will be calculated based on the non-discounted price.',
      'Our store reserves the right to modify or terminate the campaign terms as necessary.',
    ],
    lowerLimit: '1500$',
  },
];

const MyCoupons = ({route: {params}}: RootStackScreenProps<'MyCoupons'>) => {
  const [coupons, setCoupons] = useState<ICoupon[]>(params?.coupons ?? []);

  useEffect(() => {
    setCoupons(params?.coupons ?? []);
  }, [params?.coupons]);

  const renderCoupon: ListRenderItem<ICoupon> = ({item}) => {
    return <Coupon data={item} containerStyle={{marginTop: 12}} />;
  };

  return (
    <PageWrapper removeTop>
      <PageHeader header="My Coupons" />
      {coupons && coupons.length === 0 && (
        <View style={[styles.container, styles.empty]}>
          <Info
            icon="Coupon"
            title="There Is No Coupon"
            navigateTo="MyCoupons"
            navigateParams={{coupons: _coupons}}
            buttonText={'Add Coupon'}
          />
        </View>
      )}
      {coupons && coupons.length > 0 && (
        <FlatList
          nestedScrollEnabled
          renderItem={renderCoupon}
          data={coupons}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => 'c-' + i}
        />
      )}
    </PageWrapper>
  );
};

export default MyCoupons;
