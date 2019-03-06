import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { reducer as authReducer, State as authState } from './auth.reducer';
import {
  reducer as courseReducer,
  State as courseState
} from './course.reducer';

export interface State {
  auth: authState;
  courses: courseState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  courses: courseReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
