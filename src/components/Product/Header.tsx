import styles from './styles/header';

import React, {memo, useRef} from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';

import Icon from '@/components/Icon';
import Text from '@/components/Text';
import {useTheme} from '@/hooks/theme';
import {useIsFavorite} from '@/hooks/user';
import {Storage} from '@/utils';
import {IFavorite} from '@/types/utils/Info';
import {useAppDispatch} from '@/hooks/stores';
import {addFavorite, removeFavorite} from '@/stores/controllers/user';

type Props = {
  starRate: number;
  id: string;
};

const Header = ({starRate, id}: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isFavorite = useIsFavorite(id);

  const processing = useRef(false);

  const onFavorite = async () => {
    if (processing.current) return;
    processing.current = true;

    const newIsFavorite = !isFavorite;

    let newFavorites: IFavorite[] = [];
    if (newIsFavorite) {
      const newFavorite: IFavorite = {
        createdAt: dayjs().valueOf(),
        productId: id,
      };

      dispatch(addFavorite(newFavorite));
    } else {
      dispatch(removeFavorite(id));
    }

    processing.current = false;
  };

  return (
    <React.Fragment>
      <Icon
        onClick={onFavorite}
        hasContainerStyle
        containerSize={28}
        size={16}
        containerStyle={styles.favorite}
        name={isFavorite ? 'HeartFilled' : 'Heart'}
        color={isFavorite ? theme.iconHighlighted : undefined}
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
