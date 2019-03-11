import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isLoggedIn: boolean;
  constructor(
    public auth: AuthService,
    public router: Router,
    private store: Store<State>
  ) {
    this.store.pipe(select('auth', 'isAuthenticated')).subscribe((value) => {
      this.isLoggedIn = value;
    });
  }
  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
