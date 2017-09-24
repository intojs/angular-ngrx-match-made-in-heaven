import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/models/AppState';
import { User } from '../../domain/User';
import * as usersActions from '../../store/actions/users.actions';
import * as usersSelectors from '../../store/selectors/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.styl']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new usersActions.GetUsersAction());
    this.users$ = this.store.select(usersSelectors.getUsers);
  }

  trackUserById(index, user: User) {
    return user.id;
  }
}
