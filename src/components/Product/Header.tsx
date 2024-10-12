import styles from './styles/header';

import React, {memo} from 'react';
import {View} from 'react-native';

import Icon from '@/components/Icon';

const Header = () => {
  const onFavorite = () => {};

  return (
    <React.Fragment>
      <Icon
        onClick={onFavorite}
        hasContainerStyle
        containerSize={28}
        size={16}
        containerStyle={styles.favorite}
        name="Heart"
      />
      <View style={styles.rate}>
        <Icon size={16} name='StarFilled' />
      </View>
    </React.Fragment>
  );
};

export default memo(Header, () => true);
