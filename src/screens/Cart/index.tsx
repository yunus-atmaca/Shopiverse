import styles from './styles';

import Summary from './Summuray';

import React from 'react';
import {ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import ProductsInATitle from '@/components/ProductsInATitle';
import {useAppSelector} from '@/hooks/stores';
import {SelectUser} from '@/stores/selectors';
import ProductInTheCart from '@/components/ProductInTheCart';

const Cart = () => {
  const _cart = useAppSelector(SelectUser.cart);

  return (
    <PageWrapper>
      <ScrollView
        contentContainerStyle={{paddingBottom: 72}}
        showsVerticalScrollIndicator={false}>
        {_cart.length === 0 && (
          <View style={styles.container}>
            <Info
              icon="Cart"
              title="My Cart"
              desc="There are no products in your cart."
              navigateTo="Home"
              buttonText={'Start Shopping'}
            />
          </View>
        )}

        {_cart.length > 0 &&
          _cart.map(cp => {
            return <ProductInTheCart key={cp.product.id} data={cp} />;
          })}

        <ProductsInATitle title="Our suggestions for you" />
        <ProductsInATitle title="Popular Products" />
      </ScrollView>
      <Summary products={_cart.filter(c => c.isActive)} />
    </PageWrapper>
  );
};

export default Cart;
