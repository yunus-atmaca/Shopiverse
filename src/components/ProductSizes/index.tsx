import styles from './styles';

import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import Text from '@/components/Text';
import Styles from '@/theme/style';
import {useTheme} from '@/hooks/theme';

const ProductSizes = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState('XS');

  return (
    <View style={styles.container}>
      <Text.H>Sizes</Text.H>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
        renderItem={({item}) => {
          const isSelected = item === selected;
          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              activeOpacity={0.7}
              style={[
                styles.sizeContainer,
                {
                  borderWidth: isSelected ? Styles.borderWidth.m : 0,
                  borderColor: isSelected
                    ? theme.borderHighlighted
                    : theme.border,
                },
              ]}>
              <Text.H>{item}</Text.H>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProductSizes;
