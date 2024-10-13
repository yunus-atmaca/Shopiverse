import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '@/types/api/Auth';
import {IFavorite} from '@/types/utils/Info';
import {Storage} from '@/utils';

const name = 'auth';

interface State {
  favorites: IFavorite[];
}

const initialState: State = {
  favorites: [],
};

const {
  actions: {addFavorite, removeFavorite, setFavorites},
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    addFavorite: (state: State, action: PayloadAction<IFavorite>) => {
      const cloned = JSON.parse(JSON.stringify(state.favorites)) as IFavorite[];
      cloned.push(action.payload);

      Storage.set(Storage.Keys.USER_FAVORITES, cloned);

      return {...state, favorites: cloned};
    },
    removeFavorite: (state: State, action: PayloadAction<string>) => {
      let cloned = JSON.parse(JSON.stringify(state.favorites)) as IFavorite[];
      cloned = cloned.filter(c => c.productId !== action.payload);

      Storage.set(Storage.Keys.USER_FAVORITES, cloned);

      return {...state, favorites: cloned};
    },
    setFavorites: (state: State, action: PayloadAction<IFavorite[]>) => {
      return {...state, favorites: action.payload};
    },
  },
});

export {reducer, setFavorites, addFavorite, removeFavorite};
