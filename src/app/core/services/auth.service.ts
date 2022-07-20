import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticateRequest } from 'src/app/shared/models/authenticateRequest.model';


@Injectable({
   providedIn: 'root',
})
export class AuthService {
   constructor(
      private httpClient: HttpClient,
   ) {}

   // authenticate(userName: string, password: number) {

   //    return this.httpClient
   //       .post(environment.endpoint_api + 'Auth/login',
   //        { userName, password },
   //        { observe: 'response'})
   //       .pipe(tap(res=> {
   //          const authToken = res.headers.get('x-acess-token');
   //          this.userService.setToken(authToken);
   //          console.log("autenticado com token");
   //       }))
   // }

   authenticate(authRequest: AuthenticateRequest, dataBaseName: string) {
      let headers = new HttpHeaders();
      headers = headers.set('databaseName', dataBaseName);

      return this.httpClient.post(
         environment.endpoint_api + 'Auth/login',
         authRequest,
         { headers: headers }
      );

   }
}
