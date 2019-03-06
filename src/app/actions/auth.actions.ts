import { Action } from '@ngrx/store';
import LoginData from '../models/login-data.interface';

export enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout',
  LoadUserInfo = 'LoadUserInfo',
  LoadUserInfoSuccess = 'LoadUserInfoSuccess',
  LoadUserInfoFailure = 'LoadUserInfoFailure',
  LoginSuccess = 'LoginSuccess',
  LoginFailure = 'LoginFailure'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
  constructor(public payload: LoginData) {}
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess;
  constructor(public token: string) {}
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LoginFailure;
  constructor(public error: string) {
    console.log(error);
  }
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}

export class LoadUserInfo implements Action {
  readonly type = ActionTypes.LoadUserInfo;
}

export class LoadUserInfoSuccess implements Action {
  readonly type = ActionTypes.LoadUserInfoSuccess;
  constructor(public username: string) {}
}

export type ActionsUnion =
  | Login
  | Logout
  | LoadUserInfo
  | LoginSuccess
  | LoginFailure
  | LoadUserInfoSuccess;
