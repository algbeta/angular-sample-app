import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setItemInLocalStorage(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  removeItemFromLocalStorage(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }

  getItemFromLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
