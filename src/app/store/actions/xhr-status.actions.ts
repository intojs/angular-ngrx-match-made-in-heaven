import { Action } from '@ngrx/store';

export const SET_XHR_IN_PROGRESS = '[xhrStatus] Set Xhr In Progress';
export const SET_XHR_SUCESS = '[xhrStatus] Set Xhr Success';
export const SET_XHR_ERROR = '[xhrStatus] Set Xhr Error';

export class SetXhrInProgressAction implements Action {
  readonly type = SET_XHR_IN_PROGRESS;
}

export class SetXhrSuccessAction implements Action {
  readonly type = SET_XHR_SUCESS;
}

export class SetXhrErrorAction implements Action {
  readonly type = SET_XHR_ERROR;
}

export type Actions = SetXhrInProgressAction | SetXhrSuccessAction | SetXhrErrorAction;


