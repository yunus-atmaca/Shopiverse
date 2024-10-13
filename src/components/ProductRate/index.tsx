import styles from './styles';

import React, {memo} from 'react';
import {View} from 'react-native';

import Icon from '@/components/Icon';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  rate: number;
  numberOfRate: string;
};

const ProductRate = ({rate, numberOfRate}: Props) => {
  const theme = useTheme();
  const rateFloor = Math.floor(rate);
  return (
    <View style={styles.container}>
      <Text.H style={{marginEnd: 4}} size={14}>
        {rate}
      </Text.H>
      {new Array(5).fill(0).map((_, i) => {
        if (i + 1 <= rateFloor)
          return (
            <Icon
              color={theme.star}
              size={14}
              key={'s-' + i}
              name="StarFilled"
            />
          );
        else
          return (
            <Icon color={theme.star} size={14} key={'s-' + i} name="Star" />
          );
      })}
      <Text.H style={{marginStart: 4}} size={14}>
        {`(${numberOfRate})`}
      </Text.H>
    </View>
  );
};

export default memo(ProductRate, () => true);
