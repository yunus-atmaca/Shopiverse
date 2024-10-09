import {RootState} from '../index';
import {createSelector} from '@reduxjs/toolkit';

export const controller = (state: RootState) => state.authController;

export const user = createSelector(controller, c => c.user);
export const token = createSelector(controller, c => c.token);
