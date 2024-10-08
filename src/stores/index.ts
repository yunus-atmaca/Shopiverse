import {configureStore} from '@reduxjs/toolkit';

import {AuthController} from './controllers';

const stores = configureStore({
  reducer: {
    authController: AuthController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;

export default stores;
