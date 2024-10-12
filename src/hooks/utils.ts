import {useAppDispatch} from './stores';

import {useCallback, useEffect} from 'react';
import {Storage} from '@/utils';
import {setUser} from '@/stores/controllers/auth';

const useAppSession = () => {
  const dispatch = useAppDispatch();

  const fetchInitial = async () => {
    const userData = await Storage.get(Storage.Keys.USER_DATA);
    dispatch(setUser(userData));
  };

  useEffect(() => {
    fetchInitial();
  }, []);

  return null;
};

export {useAppSession};
