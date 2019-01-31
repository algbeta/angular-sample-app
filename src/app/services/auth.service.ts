import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService) {}

  login(user: any): boolean {
    return this.localStorageService.setItemInLocalStorage('user', user);
  }

  logout(): void {
    this.localStorageService.removeItemFromLocalStorage('user');
  }

  isAuthenticated(): boolean {
    const userData = this.localStorageService.getItemFromLocalStorage('user');
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
