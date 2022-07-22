import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

   user: Usuario = new Usuario();

  constructor() { }


  ngOnInit() {}

  receberUsuarios(usuario:any) {

      this.user = usuario ;
  }

}
