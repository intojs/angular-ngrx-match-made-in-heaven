import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './store/models/AppState';
import * as xhrStatusSelectors from './store/selectors/xhr-status.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inProgress$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.inProgress$ = this.store.select(xhrStatusSelectors.getInProgress);
  }
}
