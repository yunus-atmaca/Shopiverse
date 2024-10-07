import styles from './styles/notLoggedIn';

import React from 'react';
import {View} from 'react-native';

import Icon from '@/components/Icon';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Button from '@/components/Button';

const NotLoggedIn = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Icon containerSize={108} size={48} color={theme.markers} name="Heart" />
      <Text.P align="center" style={styles.header}>
        Favorilerim
      </Text.P>
      <Text.P
        align="center"
        color={theme.textSub}
        style={styles.desc}
        size={12}>
        Favorileriniz görüntüleyebilmek için lütfen giriş yapın.
      </Text.P>

      <View style={{width: '100%'}}>
        <Button text={'Giriş Yap'} style={styles.button} />
      </View>
    </View>
  );
};

export default NotLoggedIn;
