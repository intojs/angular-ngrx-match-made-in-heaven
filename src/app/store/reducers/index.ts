import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../models/AppState';
import { usersReducer } from './users.reducer';
import { followedUsersReducer } from './followed-users.reducer';
import { xhrStatusReducer } from './xhr-status.reducer';

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer,
  followedUsers: followedUsersReducer,
  xhrStatus: xhrStatusReducer
};

