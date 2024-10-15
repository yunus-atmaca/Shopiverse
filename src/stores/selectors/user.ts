import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

export const controller = (state: RootState) => state.userController;

export const favorites = createSelector(controller, c => c.favorites);
export const cart = createSelector(controller, c => c.cart);
