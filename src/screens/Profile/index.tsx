import styles from './styles';

import React, {useEffect} from 'react';
import { View } from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {navigationRef} from '@/navigation';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';

const Profile = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      //navigationRef.navigate('Login');
    }
    navigationRef.getCurrentRoute();
  }, [isFocused]);

  return (
    <PageWrapper>
      <View style={styles.notLoggedIn}>
        <Info 
          icon='Login'
          title='Hesabım'
          desc='Hesabınızı görüntülüyebilmek için lütfen giriş yapın.'
          navigateTo='Login'
          buttonText={'Giriş Yap'}
        />
      </View>
    </PageWrapper>
  );
};

export default Profile;
