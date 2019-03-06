import {
  ActionTypes,
  LoginSuccess,
  LoadUserInfoSuccess
} from '../actions/auth.actions';
import { Action } from '@ngrx/store';

export interface State {
  isAuthenticated: boolean;
  user: {
    token: string;
    username: string;
  };
}

const defaultState: State = {
  isAuthenticated: false,
  user: {
    token: '',
    username: ''
  }
};

export function reducer(state: State = defaultState, action: Action): State {
  switch (action.type) {
    case ActionTypes.LoginSuccess: {
      return {
        ...state,
        user: {
          ...state.user,
          token: (<LoginSuccess>action).token
        }
      };
    }
    case ActionTypes.LoadUserInfoSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...state.user,
          username: (<LoadUserInfoSuccess>action).username
        }
      };
    }
    case ActionTypes.Logout: {
      return defaultState;
    }
    default:
      return state;
  }
}
