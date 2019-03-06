import {
  ActionTypes,
  LoadCoursesSuccess,
  AdjustLoaded
} from '../actions/course.actions';
import { Action } from '@ngrx/store';
import Course from '../models/course';

export interface State {
  items: Course[];
  loaded: number;
  quantityPerRequest: number;
}

const defaultState: State = {
  items: [],
  loaded: 0,
  quantityPerRequest: 3
};

export function reducer(state: State = defaultState, action: Action): State {
  switch (action.type) {
    case ActionTypes.LoadCoursesSuccess: {
      return {
        ...state,
        items: (<LoadCoursesSuccess>action).courses
      };
    }
    case ActionTypes.AdjustLoaded: {
      return {
        ...state,
        loaded: state.loaded + (<AdjustLoaded>action).value
      };
    }
    default:
      return state;
  }
}
