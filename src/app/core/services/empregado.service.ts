import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CrudService } from "./crudService.service";
import { Empregado } from "src/app/shared/models/empregado.model";


@Injectable({
    providedIn: "root"
  })

export class EmpregadoServices extends CrudService<Empregado, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/empregado`);
    }


}
