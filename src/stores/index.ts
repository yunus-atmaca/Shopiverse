import {configureStore} from '@reduxjs/toolkit';

import {AuthController} from './controllers';
import {UserController} from './controllers';

const stores = configureStore({
  reducer: {
    authController: AuthController.reducer,
    userController: UserController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;

export default stores;
