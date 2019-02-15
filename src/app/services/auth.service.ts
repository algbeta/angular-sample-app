import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3004/auth';

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  login(user: any, successCallback, errorCallback) {
    return this.http
      .post<any>(`${this.authUrl}/login`, user, {
        headers: {}
      })
      .subscribe(
        (data) => {
          this.localStorageService.setItemInLocalStorage('token', data.token);
          successCallback();
          this.loadUserInfo();
        },
        (error) => errorCallback()
      );
  }

  logout(): void {
    this.localStorageService.removeItemFromLocalStorage('user');
  }

  isAuthenticated(): boolean {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
    const token = this.localStorageService.getItemFromLocalStorage('token');
    return !!userData || !!token;
  }

  private loadUserInfo() {
    const token = this.localStorageService.getItemFromLocalStorage('token');
    this.http
      .post<any>(`${this.authUrl}/userinfo`, '', {
        headers: {
          Authorization: token
        }
      })
      .subscribe((data) => {
        data &&
          this.localStorageService.setItemInLocalStorage(
            'user',
            data
          );
      });
  }

  getUserInfo(): string {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
    if (userData) {
      return userData.login;
    }

    return '';
  }
}
