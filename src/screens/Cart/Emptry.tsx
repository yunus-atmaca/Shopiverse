import styles from './styles/empty';

import React from 'react';
import {View} from 'react-native';

import Icon from '@/components/Icon';
import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Button from '@/components/Button';

const Empty = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Icon size={48} containerSize={108} color={theme.markers} name="Cart" />
      <Text.P align="center" style={styles.header}>
        Sepetim
      </Text.P>
      <Text.P
        align="center"
        color={theme.textSub}
        style={styles.desc}
        size={12}>
        Sepetinde ürün bulunmamaktadır
      </Text.P>

      <View style={{width: '100%'}}>
        <Button text={'Alışverişe Başla'} style={styles.button} />
      </View>
    </View>
  );
};

export default Empty;
