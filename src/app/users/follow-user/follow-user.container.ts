import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../domain/User';

import { AppState } from '../../store/models/AppState';
import * as followdUsersActions from '../../store/actions/followed-users.actions';
import * as followedUsersSelectors from '../../store/selectors/followed-users.selectors';

@Component({
  selector: 'app-follow-user-container',
  template: `
    <app-follow-button
      *ngIf="!(isUserFollowed$ | async)"
      (click)="followUser()"
    >
      Follow
    </app-follow-button>
    <app-followed
      *ngIf="isUserFollowed$ | async"
      (click)="unfollowUser()"
    >
      Following
    </app-followed>
  `
})
export class FollowUserContainerComponent implements OnInit {
  @Input() user: User;
  isUserFollowed$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isUserFollowed$ = this.store.select(followedUsersSelectors.isUserFollowed(this.user.id));
  }

  followUser() {
    this.store.dispatch(new followdUsersActions.FollowUserAction(this.user));
  }

  unfollowUser() {
    this.store.dispatch(new followdUsersActions.UnfollowUserAction(this.user));
  }
}
