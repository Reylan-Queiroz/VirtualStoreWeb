import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

   hasToken() {

      return this.getToken();
   }

   setToken() {

   }

   getToken() {

   }

   removeToken() {

   }

}
