import styles from './styles';

import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppSelector} from '@/hooks/stores';
import {SelectAuth} from '@/stores/selectors';
import {useFavorites} from '@/hooks/user';
import {Pages} from '@/navigation';

const WhishList = () => {
  const user = useAppSelector(SelectAuth.user);
  const {favorites, setFavorites} = useFavorites();

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

  useEffect(() => {}, []);

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
    </PageWrapper>
  );
};

export default WhishList;
