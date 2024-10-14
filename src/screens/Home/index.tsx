import React from 'react';

import PageWrapper from '@/components/PageWrapper';
import ProductsInATitle from '@/components/ProductsInATitle';
import PageSearchHeader from '@/components/PageSearchHeader';
import Banners from '@/components/Banners';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <PageWrapper removeBottom removeTop>
      <PageSearchHeader />
      <ScrollView contentContainerStyle={{paddingBottom: 32}}>
        <Banners />
        <ProductsInATitle title="Senin İçin Öneriler" />
        <ProductsInATitle title="Popüler Ürünler" />
        <ProductsInATitle title="Indirimli Ürünler" />
      </ScrollView>
    </PageWrapper>
  );
};

export default Home;
