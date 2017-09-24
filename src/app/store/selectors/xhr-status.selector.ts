import { createFeatureSelector, createSelector } from '@ngrx/store';

import { XhrStatusState } from '../models/XhrStatusState';
import * as xhrStatusReducer from '../reducers/xhr-status.reducer';

export const getXhrStatus = createFeatureSelector<XhrStatusState>('xhrStatus');

export const getInProgress = createSelector(
  getXhrStatus,
  xhrStatusReducer.getInProgress
);

export const getHasError = createSelector(
  getXhrStatus,
  xhrStatusReducer.getHasError
);
