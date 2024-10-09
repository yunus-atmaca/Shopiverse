import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '@/types/api/Auth';

const name = 'auth';

interface State {
  token: string | null;
  user: IUser | null;
}

const initialState: State = {
  token: null,
  user: null,
};

const {
  actions: {setUser, setToken},
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setUser: (state: State, action: PayloadAction<IUser | null>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: (state: State, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export {reducer, setUser, setToken};
