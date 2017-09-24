import { FollowedUser } from './FollowedUser';

export interface FollowedUsersState {
  byId: { [key: string]: FollowedUser };
  allIds: number[];
}
