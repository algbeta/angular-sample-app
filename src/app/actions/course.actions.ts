import { Action } from '@ngrx/store';
import Course from '../models/course';

export enum ActionTypes {
  LoadCourses = 'LoadCourses',
  LoadCoursesSuccess = 'LoadCoursesSuccess',
  LoadCoursesFailure = 'LoadCoursesFailure',
  LoadMoreCourses = 'LoadMoreCourses',
  AdjustLoaded = 'AdjustLoaded',
  SearchCourses = 'SearchCourses',
  SearchCoursesSuccess = 'SearchCoursesSuccess',
  SearchCoursesFailure = 'SearchCoursesFailure',
  DeleteCourse = 'DeleteCourse',
  DeleteCourseSuccess = 'DeleteCourseSuccess'
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

export class SearchCourses implements Action {
  readonly type = ActionTypes.SearchCourses;
  constructor(public query: string) {}
}

export class SearchCoursesSuccess implements Action {
  readonly type = ActionTypes.SearchCoursesSuccess;
  constructor(public courses: Course[]) {}
}

export class SearchCoursesFailure implements Action {
  readonly type = ActionTypes.SearchCoursesFailure;
}

export class DeleteCourse implements Action {
  readonly type = ActionTypes.DeleteCourse;
  constructor(public courseId: string) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = ActionTypes.DeleteCourseSuccess;
  constructor(public courseId: string) {}
}

export type ActionsUnion =
  | LoadCourses
  | LoadCoursesSuccess
  | LoadCoursesFailure
  | LoadMoreCourses
  | AdjustLoaded
  | SearchCourses
  | SearchCoursesSuccess
  | SearchCoursesFailure
  | DeleteCourse
  | DeleteCourseSuccess;
