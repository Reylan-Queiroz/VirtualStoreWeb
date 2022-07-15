import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCadastro } from 'src/app/shared/models/tipoCadastro.model';
import { environment } from 'src/environments/environment';
import { CrudService } from './crudService.service';

@Injectable({
  providedIn: 'root'
})
export class TipoCadastroService extends CrudService<TipoCadastro, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/tipoCadastro`);
    }
}
