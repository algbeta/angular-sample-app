import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  mapTo,
  debounceTime,
  filter,
  distinctUntilChanged,
  concatMap
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CourseService } from '../services/course.service';
import { State } from '../reducers';
import { Action, Store } from '@ngrx/store';
import {
  ActionTypes,
  LoadCourses,
  LoadCoursesSuccess,
  LoadCoursesFailure,
  LoadMoreCourses,
  AdjustLoaded,
  SearchCourses,
  SearchCoursesSuccess,
  SearchCoursesFailure,
  DeleteCourse,
  DeleteCourseSuccess
} from '../actions/course.actions';
import Course from '../models/course';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CourseService,
    private store$: Store<State>
  ) {}

  @Effect() loadCourses$: Observable<Action> = this.actions$.pipe(
    ofType<LoadCourses>(ActionTypes.LoadCourses),
    withLatestFrom(this.store$.select('courses', 'loaded')),
    withLatestFrom(this.store$.select('courses', 'quantityPerRequest')),
    switchMap(([action, quantityPerRequest], loaded) => {
      return this.coursesService.getList(loaded, quantityPerRequest).pipe(
        map((list) => {
          return new LoadCoursesSuccess(list);
        }),
        catchError((err) => {
          console.log(err);
          return of(new LoadCoursesFailure());
        })
      );
    })
  );

  @Effect() loadMoreCourses$: Observable<Action> = this.actions$.pipe(
    ofType<LoadMoreCourses>(ActionTypes.LoadMoreCourses),
    withLatestFrom(this.store$.select('courses', 'loaded')),
    withLatestFrom(this.store$.select('courses', 'quantityPerRequest')),
    switchMap(([action, quantityPerRequest], loaded) => {
      return this.coursesService.getList(loaded++, quantityPerRequest).pipe(
        concatMap((list: Course[]) => [
          new LoadCoursesSuccess(list),
          new AdjustLoaded(1)
        ]),
        catchError((err) => {
          console.log(err);
          return of(new LoadCoursesFailure());
        })
      );
    })
  );

  @Effect() SearchCourses$: Observable<Action> = this.actions$.pipe(
    ofType<SearchCourses>(ActionTypes.SearchCourses),
    withLatestFrom(this.store$.select('courses', 'query')),
    filter(([action, query]) => query.length >= 3),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(([action, query]) => {
      return this.coursesService.searchCourses(query).pipe(
        map((list) => {
          return new SearchCoursesSuccess(list);
        }),
        catchError((err) => {
          console.log(err);
          return of(new SearchCoursesFailure());
        })
      );
    })
  );

  @Effect() deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteCourse>(ActionTypes.DeleteCourse),
    map((action) => action.courseId),
    switchMap((courseId) => {
      return this.coursesService.removeItem(courseId).pipe(
        mapTo(new DeleteCourseSuccess(courseId)),
        catchError((err) => {
          console.log(err);
          return of(err);
        })
      );
    })
  );
}
