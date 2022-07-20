import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

   hasToken(KEY: string) {

      return !!this.getToken(KEY);
   }

   setToken(KEY: string ,token: any) {
      window.localStorage.setItem(KEY, token);
   }

   getToken(KEY: string) {
      return window.localStorage.getItem(KEY);
   }

   removeToken(KEY: string) {
      window.localStorage.removeItem(KEY);
   }

}
