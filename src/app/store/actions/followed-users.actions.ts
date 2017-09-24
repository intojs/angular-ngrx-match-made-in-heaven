import { Action } from '@ngrx/store';
import { User } from '../../domain/User';

export const FOLLOW_USER = '[followedUsers] Follow User';
export const UNFOLLOW_USER = '[followedUsers] Unfollow User';

export class FollowUserAction implements Action {
  readonly type = FOLLOW_USER;

  constructor(public payload: User) {
  }
}

export class UnfollowUserAction implements Action {
  readonly type = UNFOLLOW_USER;

  constructor(public payload: User) {
  }
}

export type Actions = FollowUserAction | UnfollowUserAction;

