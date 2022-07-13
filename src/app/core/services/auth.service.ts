import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   constructor(private httpClient: HttpClient) {}

   authenticate(userName: string, password: number) {
      return this.httpClient.post(environment.endpoint_api + '/user/login', [
         userName,
         password,
      ]);
   }
}
