import { FollowedUser } from './FollowedUser';

export interface FollowedUsers {
  byId: { [key: string]: FollowedUser };
  allIds: number[];
}
