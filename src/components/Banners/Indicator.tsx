import styles from './styles';

import React, {memo, useState} from 'react';
import {View} from 'react-native';
import {runOnJS, SharedValue, useDerivedValue} from 'react-native-reanimated';

import Text from '@/components/Text';
import Styles from '@/theme/style';
import {useTheme} from '@/hooks/theme';

type Props = {
  posX: SharedValue<number>;
  itemLen: number;
};

const Indicator = ({posX, itemLen}: Props) => {
  const theme = useTheme();
  const [current, setCurrent] = useState(1);

  useDerivedValue(() => {
    const newVal = Math.round(posX.value / Styles.device.width);
    runOnJS(setCurrent)(newVal + 1);
  });

  return (
    <View
      style={[
        styles.indicator,
        {backgroundColor: theme.indicatorFocused + '99'},
      ]}>
      <Text.H
        color={theme.textReversed}
        typography="bold"
        size={14}>{`${current}/${itemLen}`}</Text.H>
    </View>
  );
};

export default memo(Indicator, () => true);
