import styles from './styles';

import Products from './Products';
import Address from './Address';
import CreditCard from './CreditCard';
import SaleAgreement from './SaleAgreement';

import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import {RootStackScreenProps} from '@/navigation';
import Button from '@/components/Button';

const Payment = ({route}: RootStackScreenProps<'Payment'>) => {
  const price = useMemo(() => {
    let _price = 0;
    route.params.data.forEach(p => {
      const {discountedPrice, price} = p.product;
      if (discountedPrice) {
        _price +=
          parseFloat(discountedPrice.substring(1, discountedPrice.length)) *
          p.piece;
      } else {
        _price += parseFloat(price.substring(1, price.length)) * p.piece;
      }
    });

    return _price;
  }, []);

  const onBuy = () => {};

  return (
    <PageWrapper removeTop>
      <PageHeader header="Payment" />
      <ScrollView contentContainerStyle={{paddingBottom: 32}}>
        <Products data={route.params.data} />
        <Address />
        <CreditCard />
        <SaleAgreement />
      </ScrollView>
      <View style={styles.button}>
        <Button onClick={onBuy} text={`Buy ($${price})`} />
      </View>
    </PageWrapper>
  );
};

export default Payment;
