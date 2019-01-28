import { Injectable } from '@angular/core';
import {
  setItemInLocalStorage,
  removeItemFromLocalStorage,
  getItemFromLocalStorage
} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(user: any): boolean {
    return setItemInLocalStorage('user', user);
  }

  logout(): void {
    removeItemFromLocalStorage('user');
  }

  isAuthenticated(): boolean {
    const userData = getItemFromLocalStorage('user');
    return !!userData;
  }

  getUserInfo(): string {
    const userData = getItemFromLocalStorage('user');
    if (userData) {
      return userData.login;
    }

    return '';
  }
}
