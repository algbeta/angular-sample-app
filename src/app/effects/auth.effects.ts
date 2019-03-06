import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  ActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  LoadUserInfo,
  LoadUserInfoSuccess,
  Logout
} from '../actions/auth.actions';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private lsService: LocalStorageService,
    private router: Router
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
    tap((token) => this.lsService.setItemInLocalStorage('token', token)),
    switchMap(() => {
      return of(new LoadUserInfo());
    })
  );

  @Effect() loadUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUserInfo>(ActionTypes.LoadUserInfo),
    switchMap(() => {
      return this.authService.loadUserInfo().pipe(
        tap((data) => {
          this.lsService.setItemInLocalStorage('user', data);
        }),
        switchMap((data) => {
          console.log(data);
          return of(new LoadUserInfoSuccess(data.login));
        }),
        catchError((err) => {
          console.log(err);
          return of(new LoginFailure(err));
        })
      );
    })
  );

  @Effect({ dispatch: false }) loadUserInfoSuccess$ = this.actions$.pipe(
    ofType<LoadUserInfoSuccess>(ActionTypes.LoadUserInfoSuccess),
    tap(() => {
      this.router.navigate(['/courses']);
    })
  );

  @Effect() logout$ = this.actions$.pipe(
    ofType<Logout>(ActionTypes.Logout),
    tap(() => {

    }),
    tap(() => {
      this.authService.logout()
    })
  )
}
