import { Action } from '@ngrx/store';

export enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;
}
