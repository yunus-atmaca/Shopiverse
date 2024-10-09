import styles from './styles';

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {navigationRef} from '@/navigation';
import PageWrapper from '@/components/PageWrapper';
import Info from '@/components/Info';
import {useAppSelector} from '@/hooks/stores';
import {SelectAuth} from '@/stores/selectors';

const Profile = () => {
  const isFocused = useIsFocused();
  const user = useAppSelector(SelectAuth.user);

  useEffect(() => {
    if (isFocused && !user) {
      //navigationRef.navigate('Login');
    }
    navigationRef.getCurrentRoute();
  }, [isFocused, user]);

  return (
    <PageWrapper>
      {!user ? (
        <View style={styles.notLoggedIn}>
          <Info
            icon="Login"
            title="Hesabım"
            desc="Hesabınızı görüntülüyebilmek için lütfen giriş yapın."
            navigateTo="Login"
            buttonText={'Giriş Yap'}
          />
        </View>
      ) : null}
    </PageWrapper>
  );
};

export default Profile;
