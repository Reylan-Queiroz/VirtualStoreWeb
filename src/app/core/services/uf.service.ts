import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Uf } from "src/app/shared/models/uf.model";
import { CrudService } from "./crudService.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class UFServices extends CrudService<Uf, number> {
   constructor(protected _http: HttpClient) {
      super(_http, `${environment.endpoint_api}/uf`);
    }
}
