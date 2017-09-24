import { User } from './User';

export interface Users {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
