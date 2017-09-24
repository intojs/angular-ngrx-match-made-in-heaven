import { XhrStatus } from '../models/XhrStatus';
import * as xhrStatusActions from '../actions/xhr-status.actions';

const initialState: XhrStatus = {
  inProgress: true,
  hasError: false
};

export function xhrStatusReducer(state = initialState, {type}: xhrStatusActions.Actions): XhrStatus {
  switch (type) {
    case xhrStatusActions.SET_XHR_IN_PROGRESS:
      return {
        inProgress: true,
        hasError: false
      };
    case xhrStatusActions.SET_XHR_SUCCESS:
      return {
        inProgress: false,
        hasError: false
      };
    case xhrStatusActions.SET_XHR_ERROR:
      return {
        inProgress: false,
        hasError: true
      };
    default:
      return state;
  }
}

export const getInProgress = (state: XhrStatus) => state.inProgress;

export const getHasError = (state: XhrStatus) => state.hasError;


