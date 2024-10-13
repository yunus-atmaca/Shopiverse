import {useAppSelector} from './stores';

import {useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';

import {Storage} from '@/utils';
import {IAddress, ICreditCard, IFavorite} from '@/types/utils/Info';
import {SelectUser} from '@/stores/selectors';

const useLocalItems = <T>(
  key: Storage.KEYS,
): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>] => {
  const isFocus = useIsFocused();
  const [items, setItems] = useState<T[]>();

  const fetchItems = useCallback(async (_key: Storage.KEYS) => {
    const _items = await Storage.get(_key);
    setItems(_items ?? []);
  }, []);

  useEffect(() => {
    if (isFocus) {
      fetchItems(key);
    }
  }, [isFocus, key]);

  return [items, setItems];
};

const useCreditCards = () => {
  const [items, setItems] = useLocalItems<ICreditCard>(
    Storage.Keys.USER_CREDIT_CARDS,
  );

  return {
    cards: items,
    setCards: setItems,
  };
};

const useAddresses = () => {
  const [items, setItems] = useLocalItems<IAddress>(Storage.Keys.USER_ADDRESS);

  return {
    addresses: items,
    setAddresses: setItems,
  };
};

const useFavorites = () => {
  const [items, setItems] = useLocalItems<IFavorite>(
    Storage.Keys.USER_FAVORITES,
  );

  return {
    favorites: items,
    setFavorites: setItems,
  };
};

const useIsFavorite = (id: string) => {
  const favorites = useAppSelector(SelectUser.favorites);

  let isFavorite = false;
  if (favorites) {
    const filtered = favorites.filter(favorite => favorite.productId === id);
    isFavorite = filtered.length > 0;
  }

  return isFavorite;
};

export {useFavorites, useAddresses, useCreditCards, useIsFavorite};
