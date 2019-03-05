import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Action } from '@ngrx/store';
import {
  ActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  LoadUserInfo,
  LoadUserInfoSuccess
} from '../actions/auth.actions';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private lsService: LocalStorageService
  ) {}

  @Effect() login$: Observable<Action> = this.actions$.pipe(
    ofType<Login>(ActionTypes.Login),
    map((action) => action.payload),
    switchMap((payload) =>
      this.authService.login(payload).pipe(
        map(({ token }) => {
          return new LoginSuccess(token);
        }),
        catchError((err) => {
          return of(new LoginFailure(err));
        })
      )
    )
  );

  @Effect() loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSuccess>(ActionTypes.LoginSuccess),
    map((action) => action.token),
    switchMap((token) => {
      this.lsService.setItemInLocalStorage('token', token);
      return of(new LoadUserInfo());
    })
  );

  @Effect() loadUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUserInfo>(ActionTypes.LoadUserInfo),
    switchMap(() => {
      return this.authService.getUserInfo().pipe(
        switchMap((data) => {
          console.log(data);
          return of(new LoadUserInfoSuccess(data));
        })
      );
    })
  );

  /*.subscribe(
      (data) => {
        this.localStorageService.setItemInLocalStorage('token', data.token);
        successCallback();
        this.loadUserInfo();
      },
      (error) => errorCallback()
    );*/
}
