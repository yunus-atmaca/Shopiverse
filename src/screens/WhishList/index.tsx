import styles from './styles';

import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppSelector} from '@/hooks/stores';
import {SelectAuth, SelectUser} from '@/stores/selectors';
import {Pages} from '@/navigation';
import {IProduct} from '@/types/utils/Info';
import {getProductsById} from '@/utils/products';
import ProductsInATitle from '@/components/ProductsInATitle';
import FavoriteProduct from '@/components/FavoriteProduct';
import PageSearchHeader from '@/components/PageSearchHeader';

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

  const renderFavoriteProduct: ListRenderItem<IProduct> = ({item}) => {
    return <FavoriteProduct data={item} />;
  };

  return (
    <PageWrapper removeTop removeBottom>
      <PageSearchHeader />
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
        <FlatList
          data={favoriteProducts}
          renderItem={renderFavoriteProduct}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => 'f-' + i}
          contentContainerStyle={{paddingBottom: 32}}
        />
      )}
    </PageWrapper>
  );
};

export default WhishList;
