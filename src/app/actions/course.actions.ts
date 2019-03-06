import { Action } from '@ngrx/store';
import Course from '../models/course';

export enum ActionTypes {
  LoadCourses = 'LoadCourses',
  LoadCoursesSuccess = 'LoadCoursesSuccess',
  LoadCoursesFailure = 'LoadCoursesFailure',
  LoadMoreCourses = 'LoadMoreCourses',
  AdjustLoaded = 'AdjustLoaded'
}

export class LoadCourses implements Action {
  readonly type = ActionTypes.LoadCourses;
}

export class LoadCoursesSuccess implements Action {
  readonly type = ActionTypes.LoadCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class LoadMoreCourses implements Action {
  readonly type = ActionTypes.LoadMoreCourses;
}

export class LoadCoursesFailure implements Action {
  readonly type = ActionTypes.LoadCoursesFailure;
}

export class AdjustLoaded implements Action {
  readonly type = ActionTypes.AdjustLoaded;
  constructor(public value: number) {}
}

export type ActionsUnion =
  | LoadCourses
  | LoadCoursesSuccess
  | LoadCoursesFailure
  | LoadMoreCourses
  | AdjustLoaded;
