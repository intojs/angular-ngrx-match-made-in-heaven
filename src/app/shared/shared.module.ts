import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowButtonComponent } from './follow-button/follow-button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CardComponent } from './card/card.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { FollowedComponent } from './followed/followed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FollowButtonComponent,
    FollowedComponent,
    AvatarComponent,
    CardComponent,
    PreloaderComponent
  ],
  exports: [
    FollowButtonComponent,
    FollowedComponent,
    AvatarComponent,
    CardComponent,
    PreloaderComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
