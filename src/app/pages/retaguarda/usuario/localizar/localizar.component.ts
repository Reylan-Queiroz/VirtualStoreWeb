import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FuncoesService } from 'src/app/core/services/funcoes.service';
import { UsuarioSevice } from 'src/app/core/services/usuario.service';
import { Funcoes } from 'src/app/shared/models/funcoes.model';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-localizar',
  templateUrl: './localizar.component.html',
  styleUrls: ['./localizar.component.scss']
})
export class LocalizarComponent implements OnInit {

   @Output() newItem = new EventEmitter<Usuario>();
   @Input() usuario!:Usuario;
   public users: Usuario[]=[];
   public functions: Funcoes | undefined;

   constructor(
      private _usuarioService: UsuarioSevice,
      private _functionService: FuncoesService
      ){ }

ngOnInit() {
   this.functions = new  Funcoes(1, "user");
   this._usuarioService.findAll().subscribe(
       user => {
           this.users = user;
       }
   )
   this.GetByFuncId(1);
}

public GetByFuncId(codigo: number): Funcoes | undefined{
   this._functionService.findAll().subscribe(
       funcs => {
           this.functions = funcs.find(f => f.Codigo == codigo);
       }
   )
   console.log(this.functions)
   return this.functions;
}
GetUser(usuarioSelect: Usuario ){
   this.newItem.emit(usuarioSelect);
   this.usuario = usuarioSelect;
   document.getElementById("btn_0")?.click();
   console.log(usuarioSelect)
 }

}
