import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Familia } from "src/app/shared/models/familia.model";
import { CrudService } from "./crudService.service";
import { environment } from "src/environments/environment";

@Injectable({
   providedIn:'root',
})
export class FamiliaService extends CrudService<Familia, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/familia`);
    }

}
