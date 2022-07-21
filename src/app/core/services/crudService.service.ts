import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudOperations } from 'src/app/shared/interfaces/crudOperations';
import { Security } from 'src/app/shared/utils/security.util';

const header = new HttpHeaders().set(
   'Authorization',
   `Bearer ${Security.getToken()}`
).set(
   'databaseName', Security.getDataBaseName()
);

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

   constructor(protected _http: HttpClient, protected _base: string) {}

   save(t: T): Observable<T> {
      return this._http.post<T>(this._base + "create", t, { headers: header });
   }

   update(id: ID, t: T): Observable<T> {
      return this._http.put<T>(this._base + '/' + id, t, { headers: header });
   }

   findOne(id: ID): Observable<T> {
      return this._http.get<T>(this._base + '/' + id, { headers: header });
   }

   findAll(): Observable<T[]> {
      return this._http.get<T[]>(this._base, { headers: header });
   }

   delete(id: ID): Observable<T> {
      return this._http.delete<T>(this._base + '/' + id, { headers: header });
   }


}
