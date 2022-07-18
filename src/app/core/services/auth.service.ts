import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap} from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
   providedIn: 'root',
})
export class AuthService {

   constructor(
      private httpClient: HttpClient,
      private tokenService: TokenService
      ) {}

   authenticate(userName: string, password: number) {

      return this.httpClient
         .post(environment.endpoint_api + 'Auth/login',
          { userName, password },
          { observe: 'response'})
         .pipe(tap(res=> {
            const authToken = res.headers.get('x-acess-token');
            this.tokenService.setToken(authToken);
            console.log("autenticado com token");
         }))
   }
}
