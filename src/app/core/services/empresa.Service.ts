import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "src/app/shared/models/empresa.Model";
import { environment } from "src/environments/environment";
import { CrudService } from "./crudService.service";

@Injectable({
   providedIn: "root"
 })

export class EmpresaService extends CrudService<Empresa, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/empresa`);
    }

}

