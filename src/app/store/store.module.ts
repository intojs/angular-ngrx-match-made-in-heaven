import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { UsersEffects } from './effects/users.effects';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 10
    }) : []
  ]
})
export class AppStoreModule {
}
