import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3004/auth';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  login(user: any, successCallback, errorCallback) {
    return this.http
      .post<any>(`${this.authUrl}/login`, user, this.httpOptions)
      .subscribe(
        (token: string) => {
          this.localStorageService.setItemInLocalStorage('token', token);
          successCallback();
        },
        (error) => errorCallback()
      );
  }

  logout(): void {
    this.localStorageService.removeItemFromLocalStorage('user');
  }

  isAuthenticated(): boolean {
    const userData = this.localStorageService.getItemFromLocalStorage('token');
    return !!userData;
  }

  getUserInfo(): string {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
    if (userData) {
      return userData.login;
    }

    return '';
  }
}
