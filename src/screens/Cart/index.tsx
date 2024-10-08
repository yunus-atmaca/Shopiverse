import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';

const Cart = () => {
  return (
    <PageWrapper>
      <View style={styles.container}>
        <Info
          icon="Cart"
          title="Sepetim"
          desc="Sepetinde ürün bulunmamaktadır"
          navigateTo="Home"
          buttonText={'Alışverişe Başla'}
        />
      </View>
    </PageWrapper>
  );
};

export default Cart;
