import styles from './styles/header';

import React, {memo} from 'react';
import {View} from 'react-native';

import Icon from '@/components/Icon';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';

type Props = {
  starRate: number;
};

const Header = ({starRate}: Props) => {
  const theme = useTheme();

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
      <View style={[styles.rate, {backgroundColor: theme.boxBG}]}>
        <Icon color={theme.iconHighlighted} size={12} name="StarFilled" />
        <Text.H
          color={theme.textHighlighted}
          typography="bold"
          style={{marginStart: 4}}
          size={12}>
          {starRate}
        </Text.H>
      </View>
    </React.Fragment>
  );
};

export default memo(Header, () => true);
