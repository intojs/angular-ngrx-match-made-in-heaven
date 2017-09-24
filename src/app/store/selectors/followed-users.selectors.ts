import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FollowedUsersState } from '../models/FollowedUsersState';
import * as followedUsersReduer from '../reducers/followed-users.reducer';

export const getFollowedUsers = createFeatureSelector<FollowedUsersState>('followedUsers');

export const getById = createSelector(
  getFollowedUsers,
  followedUsersReduer.getById
);

export const getAllIds = createSelector(
  getFollowedUsers,
  followedUsersReduer.getAllIds
);

export const isUserFollowed = (userId: number) => createSelector(
  getAllIds,
  (userIds: number[]) => userIds.indexOf(userId) > -1
);
