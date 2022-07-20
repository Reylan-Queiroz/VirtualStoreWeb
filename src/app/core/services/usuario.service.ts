import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Usuario } from "src/app/shared/models/usuario.model";
import { CrudService } from "./crudService.service";
import { environment } from "src/environments/environment";



@Injectable({
  providedIn: "root",
})
export class UsuarioSevice extends CrudService<Usuario, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/usuario`);
    }
}
