import { Users } from '../../domain/Users';
import { FollowedUsers } from './FollowedUsers';
import { XhrStatus } from './XhrStatus';

export interface AppState {
  users: Users;
  followedUsers: FollowedUsers;
  xhrStatus: XhrStatus;
}
