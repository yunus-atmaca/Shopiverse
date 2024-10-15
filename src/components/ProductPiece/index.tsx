import styles from './styles';

import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useTheme} from '@/hooks/theme';
import Text from '@/components/Text';
import Icon from '@/components/Icon';

type Props = {
  piece: number;
  onPlus: () => void;
  onMinus: () => void;
};

const ProductPiece = ({piece, onPlus, onMinus}: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, {borderColor: theme.border}]}>
      <TouchableOpacity
        onPress={onMinus}
        activeOpacity={0.7}
        style={styles.section}>
        <Icon size={14} name="Minus" />
      </TouchableOpacity>
      <View
        style={[
          styles.section,
          {backgroundColor: theme.boxBGHighlighted},
          {marginHorizontal: 2},
        ]}>
        <Text.H typography="bold" size={14} color={theme.textReversed}>
          {piece}
        </Text.H>
      </View>
      <TouchableOpacity
        onPress={onPlus}
        activeOpacity={0.7}
        style={styles.section}>
        <Icon size={14} name="Plus" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductPiece;
