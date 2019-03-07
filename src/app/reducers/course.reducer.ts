import {
  ActionTypes,
  LoadCoursesSuccess,
  AdjustLoaded,
  SearchCourses,
  SearchCoursesSuccess,
  DeleteCourseSuccess
} from '../actions/course.actions';
import { Action, createSelector } from '@ngrx/store';
import Course from '../models/course';

export interface State {
  items: Course[];
  loaded: number;
  quantityPerRequest: number;
  query: string;
}

const defaultState: State = {
  items: [],
  loaded: 0,
  quantityPerRequest: 3,
  query: ''
};

export const getItems = (state: State) => state.items;

export const getItemById = (id: String) => createSelector(
  getItems,
  (items) => items.find(item => item.id === id)
)

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
    case ActionTypes.SearchCourses: {
      return {
        ...state,
        query: (<SearchCourses>action).query
      };
    }
    case ActionTypes.SearchCoursesSuccess: {
      return {
        ...state,
        items: (<SearchCoursesSuccess>action).courses
      };
    }
    case ActionTypes.DeleteCourseSuccess: {
      const courseId = (<DeleteCourseSuccess>action).courseId;
      const items = state.items.filter(item => item.id !== courseId);
      return {
        ...state,
        items
      }
    }
    default:
      return state;
  }
}
