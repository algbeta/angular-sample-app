import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isLoggedIn: Observable<boolean>;
  constructor(public auth: AuthService, public router: Router) {
    this.isLoggedIn = this.auth.isAuthentificated();
  }
  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
