import styles from './styles';

import React from 'react';
import {View} from 'react-native';

import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';

const WhishList = () => {
  return (
    <PageWrapper>
      <View style={styles.notLoggedIn}>
        <Info
          icon="HeartFilled"
          title="Favorilerim"
          desc="Favorileriniz görüntüleyebilmek için lütfen giriş yapın."
          navigateTo="Login"
          buttonText={'Giriş Yap'}
        />
      </View>
    </PageWrapper>
  );
};

export default WhishList;
