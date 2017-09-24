import { Users } from '../../domain/Users';
import * as usersActions from '../actions/users.actions';

const initialState: Users = {
  total_count: null,
  incomplete_results: null,
  items: []
};

export function usersReducer(state = initialState, {type, payload}: usersActions.Actions): Users {
  switch (type) {
    case usersActions.SET_USERS:
      return payload;
    default:
      return state;
  }
}

export const getTotalCount = (state: Users) => state.total_count;

export const getIncompleteResults = (state: Users) => state.incomplete_results;

export const getItems = (state: Users) => state.items;

