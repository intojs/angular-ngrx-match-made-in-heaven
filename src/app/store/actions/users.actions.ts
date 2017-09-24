import { Action } from '@ngrx/store';

import { Users } from '../../domain/Users';

export const GET_USERS = '[users] Get Users';
export const SET_USERS = '[users] Set Users';

export class GetUsersAction implements Action {
  readonly type = GET_USERS;

  constructor(public payload?: any) {
  }
}

export class SetUsersAction implements Action {
  readonly type = SET_USERS;

  constructor(public payload: Users) {
  }
}

export type Actions = GetUsersAction | SetUsersAction;
