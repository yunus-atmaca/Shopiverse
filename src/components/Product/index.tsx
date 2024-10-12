import styles from './styles';

import Images from './Images';
import Header from './Header';

import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {useTheme} from '@/hooks/theme';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

const Product = ({containerStyle}: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: theme.boxBG, borderColor: theme.border},
      ]}>
      <Images />

      <Header />
    </View>
  );
};

export default Product;
