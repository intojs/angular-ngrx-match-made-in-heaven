import { createFeatureSelector, createSelector } from '@ngrx/store';

import { XhrStatus } from '../models/XhrStatus';
import * as xhrStatusReducer from '../reducers/xhr-status.reducer';

export const getXhrStatus = createFeatureSelector<XhrStatus>('xhrStatus');

export const getInProgress = createSelector(
  getXhrStatus,
  xhrStatusReducer.getInProgress
);

export const getHasError = createSelector(
  getXhrStatus,
  xhrStatusReducer.getHasError
);
