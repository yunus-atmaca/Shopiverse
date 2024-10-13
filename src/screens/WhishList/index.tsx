import styles from './styles';

import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppSelector} from '@/hooks/stores';
import {SelectAuth, SelectUser} from '@/stores/selectors';
import {useFavorites} from '@/hooks/user';
import {Pages} from '@/navigation';
import {IProduct} from '@/types/utils/Info';
import {getProductsById, getRandomProducts} from '@/utils/products';
import ProductsInATitle from '@/components/ProductsInATitle';

const WhishList = () => {
  const user = useAppSelector(SelectAuth.user);
  const favorites = useAppSelector(SelectUser.favorites);

  const [favoriteProducts, setFProducts] = useState<IProduct[]>();

  const info = useMemo(() => {
    return {
      title: user ? 'Favori Ürünlerini Ekle' : 'Favorilerim',
      desc: user
        ? 'Favori ürünlerini ekleyip fiyatları takip edebilirsin'
        : 'Favorileriniz görüntüleyebilmek için lütfen giriş yapın.',
      navigateTo: user ? 'Home' : 'Login',
      buttonText: user ? 'Alışverişe Başla' : 'Giriş Yap',
    };
  }, [user]);

  useEffect(() => {
    if (favorites) {
      const fp = getProductsById(favorites.map(f => f.productId));
      setFProducts(fp);
    }
  }, [favorites]);

  return (
    <PageWrapper>
      {(!user || (favorites && favorites.length === 0)) && (
        <View style={[styles.container, styles.hasNoItems]}>
          <Info
            icon="HeartFilled"
            title={info.title}
            desc={info.desc}
            navigateTo={info.navigateTo as Pages}
            buttonText={info.buttonText}
          />
        </View>
      )}
      {favoriteProducts && favoriteProducts.length > 0 && (
        <ProductsInATitle products={favoriteProducts} title="Favorites" />
      )}
    </PageWrapper>
  );
};

export default WhishList;
