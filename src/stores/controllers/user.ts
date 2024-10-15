import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ICartProduct, IFavorite, IProduct} from '@/types/utils/Info';
import {Storage} from '@/utils';

const name = 'auth';

interface State {
  favorites: IFavorite[];
  cart: ICartProduct[];
}

const initialState: State = {
  favorites: [],
  cart: [],
};

const {
  actions: {
    addFavorite,
    removeFavorite,
    setFavorites,
    addProductToCart,
    removeProductFromCart,
    setProductActive,
  },
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
    addProductToCart: (state: State, action: PayloadAction<IProduct>) => {
      const cloned = JSON.parse(JSON.stringify(state.cart)) as ICartProduct[];
      const index = cloned.findIndex(c => c.product.id === action.payload.id);
      if (index >= 0) {
        cloned[index] = {...cloned[index], piece: cloned[index].piece + 1};
      } else {
        cloned.push({piece: 1, product: action.payload, isActive: true});
      }

      return {...state, cart: cloned};
    },
    removeProductFromCart: (state: State, action: PayloadAction<string>) => {
      let cloned = JSON.parse(JSON.stringify(state.cart)) as ICartProduct[];
      const index = cloned.findIndex(c => c.product.id === action.payload);
      if (index >= 0) {
        if (cloned[index].piece <= 1) {
          cloned = cloned.filter(c => c.product.id !== action.payload);
        } else {
          cloned[index] = {...cloned[index], piece: cloned[index].piece - 1};
        }
      }

      return {...state, cart: cloned};
    },
    setProductActive: (state: State, action: PayloadAction<string>) => {
      let cloned = JSON.parse(JSON.stringify(state.cart)) as ICartProduct[];
      const index = cloned.findIndex(c => c.product.id === action.payload);
      if (index >= 0) {
        cloned[index] = {...cloned[index], isActive: !cloned[index].isActive};
      }

      return {...state, cart: cloned};
    },
  },
});

export {
  reducer,
  setFavorites,
  addFavorite,
  removeFavorite,
  addProductToCart,
  removeProductFromCart,
  setProductActive,
};
