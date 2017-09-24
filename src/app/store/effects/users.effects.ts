import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../../core/users.service';
import { Users } from '../../domain/Users';
import * as usersActions from '../actions/users.actions';
import * as xhrStatusActions from '../actions/xhr-status.actions';

@Injectable()
export class UsersEffects {
  @Effect()
  getUsersInProgress$ = this.actions$
    .ofType(usersActions.GET_USERS)
    .switchMap(() => Observable.of(new xhrStatusActions.SetXhrInProgressAction()));

  @Effect()
  getUsers$ = this.actions$
    .ofType(usersActions.GET_USERS)
    .switchMap(() => this.usersService.getUsers()
      .switchMap((users: Users) => [
        new usersActions.SetUsersAction(users),
        new xhrStatusActions.SetXhrSuccessAction()
      ])
      .catch((error: Response) => Observable.of(new xhrStatusActions.SetXhrErrorAction()))
    );

  constructor(private actions$: Actions,
              private usersService: UsersService) {
  }
}
