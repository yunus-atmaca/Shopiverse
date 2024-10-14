import styles from './styles';

import React, {memo, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import Styles from '@/theme/style';

const ProductColors = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Text.H>Color</Text.H>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={[
          'aqua',
          'cornflowerblue',
          'crimson',
          'darkblue',
          'darkolivegreen',
          'hotpink',
        ]}
        renderItem={({item, index}) => {
          const isSelected = index === selected;
          return (
            <TouchableOpacity
              onPress={() => setSelected(index)}
              activeOpacity={0.7}
              style={[
                styles.colorContainer,
                {
                  borderWidth: isSelected
                    ? Styles.borderWidth.l
                    : Styles.borderWidth.m,
                  borderColor: isSelected
                    ? theme.borderHighlighted
                    : theme.border,
                },
              ]}>
              <View style={[styles.color, {backgroundColor: item}]} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default memo(ProductColors, () => true);
