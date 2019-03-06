import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CourseService } from '../services/course.service';
import { State } from '../reducers'
import { Action, Store } from '@ngrx/store';
import {
  ActionTypes,
  LoadCourses,
  LoadCoursesSuccess,
  LoadCoursesFailure,
  LoadMoreCourses,
  AdjustLoaded
} from '../actions/course.actions';

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
    switchMap( ([action, quantityPerRequest], loaded) => {
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

  @Effect() loadMoreCourses: Observable<Action> = this.actions$.pipe(
    ofType<LoadMoreCourses>(ActionTypes.LoadMoreCourses),
    tap(() => {
      this.store$.dispatch(new AdjustLoaded(1));
    }),
    tap(() => {
      return this.store$.dispatch(new LoadCourses());
    })
  )

}
