import styles from './styles';

import React from 'react';
import {
  ImageSourcePropType,
  Image,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  img: ImageSourcePropType;
  containerStyle: StyleProp<ViewStyle>;
};

const ProductImage = ({img, containerStyle}: Props) => {
  return (
    <View style={containerStyle}>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default ProductImage;
