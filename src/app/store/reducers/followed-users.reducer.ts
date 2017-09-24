import * as _ from 'lodash';

import { FollowedUsers } from '../models/FollowedUsers';
import { FollowedUser } from '../models/FollowedUser';
import * as followedUsersActions from '../actions/followed-users.actions';

const initialState: FollowedUsers = {
  byId: null,
  allIds: []
};

export function followedUsersReducer(state = initialState, {type, payload}: followedUsersActions.Actions): FollowedUsers {
  switch (type) {
    case followedUsersActions.FOLLOW_USER:
      const followedUser: FollowedUser = {
        id: payload.id,
        login: payload.login
      };
      return {
        byId: Object.assign(
          {},
          state.byId,
          {
            [payload.id]: followedUser
          }
        ),
        allIds: state.allIds.concat(payload.id)
      };
    case followedUsersActions.UNFOLLOW_USER:
      return {
        byId: _.omit(state.byId, [payload.id]),
        allIds: state.allIds.filter((id: number) => id !== payload.id)
      };
    default:
      return state;
  }
}

export const getById = (state: FollowedUsers) => state.byId;

export const getAllIds = (state: FollowedUsers) => state.allIds;
