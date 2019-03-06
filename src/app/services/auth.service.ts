import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import LoginData from '../models/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3004/auth';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  login(userData: LoginData) {
    return this.http.post<any>(`${this.authUrl}/login`, userData, {
      headers: {}
    });
  }

  logout(): void {
    this.localStorageService.removeItemFromLocalStorage('user');
    this.localStorageService.removeItemFromLocalStorage('token');
  }

  hasTokenAndInfo(): boolean {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
    const token = this.localStorageService.getItemFromLocalStorage('token');
    return !!userData && !!token;
  }

  loadUserInfo() {
    return this.http.post<any>(`${this.authUrl}/userinfo`, '');
  }

  getUserInfo(): Observable<string> {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
    if (userData) {
      return of(userData.login);
    }

    return of('');
  }
}
