import {useAppDispatch} from './stores';

import {useEffect} from 'react';
import {Storage} from '@/utils';
import {setUser} from '@/stores/controllers/auth';
import {setFavorites} from '@/stores/controllers/user';

const useAppSession = () => {
  const dispatch = useAppDispatch();

  const fetchInitial = async () => {
    const favorites = await Storage.get(Storage.Keys.USER_FAVORITES);
    if (favorites) dispatch(setFavorites(favorites));

    const userData = await Storage.get(Storage.Keys.USER_DATA);
    dispatch(setUser(userData));
  };

  useEffect(() => {
    fetchInitial();
  }, []);

  return null;
};

export {useAppSession};
