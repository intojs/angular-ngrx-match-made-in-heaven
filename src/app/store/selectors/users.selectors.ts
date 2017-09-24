import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Users } from '../../domain/Users';
import * as usersReducer from '../reducers/users.reducer';

export const getUsersState = createFeatureSelector<Users>('users');

export const getUsers = createSelector(
  getUsersState,
  usersReducer.getItems
);
