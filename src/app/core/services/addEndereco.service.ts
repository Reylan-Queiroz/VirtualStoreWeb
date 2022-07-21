import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEnderecoModel } from 'src/app/shared/models/addEndereco.model';
import { environment } from 'src/environments/environment';
import { CrudService } from './crudService.service';

@Injectable({
  providedIn: 'root'
})
export class AddEnderecoService  extends CrudService<AddEnderecoModel, number>  {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/addEndereco`);
    }
}

