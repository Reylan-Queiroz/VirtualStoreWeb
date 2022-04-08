import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";
import { Familia } from "src/app/shared/models/familia.model";

@Injectable({
   providedIn:'root',
})
export class FamiliaService {
   private readonly urlApi = "Url da api";
   get headers(): HttpHeaders {
      return new HttpHeaders().set('content-type', 'application/json',)
   }
   constructor(private http: HttpClient){}

   public getAllFamilia(): Observable<Familia[]> {
      return this.http.get<Familia[]>(this.urlApi)
   }
}
