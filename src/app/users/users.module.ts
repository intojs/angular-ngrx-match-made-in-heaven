import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { FollowUserContainerComponent } from './follow-user/follow-user.container';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UsersListComponent,
    FollowUserContainerComponent
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
