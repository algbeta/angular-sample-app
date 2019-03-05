import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { reducer as authReducer, State as authState } from './auth.reducer'

export interface State {
  auth: authState
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
