import { XhrStatusState } from '../models/XhrStatusState';
import * as xhrStatusActions from '../actions/xhr-status.actions';

const initialState: XhrStatusState = {
  inProgress: true,
  hasError: false
};

export function xhrStatusReducer(state = initialState, {type}: xhrStatusActions.Actions): XhrStatusState {
  switch (type) {
    case xhrStatusActions.SET_XHR_IN_PROGRESS:
      return {
        inProgress: true,
        hasError: false
      };
    case xhrStatusActions.SET_XHR_SUCESS:
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

export const getInProgress = (state: XhrStatusState) => state.inProgress;

export const getHasError = (state: XhrStatusState) => state.hasError;


