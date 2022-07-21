import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcoes } from 'src/app/shared/models/funcoes.model';
import { environment } from 'src/environments/environment';
import { CrudService } from './crudService.service';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService extends CrudService<Funcoes, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/usuarioFuncao`);
    }

}
