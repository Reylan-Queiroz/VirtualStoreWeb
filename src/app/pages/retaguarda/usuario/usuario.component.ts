import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { PrincipalComponent } from './principal/principal.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

   user: Usuario = new Usuario();

  constructor() { }

  @ViewChild(PrincipalComponent, {static: false})

  principal!: PrincipalComponent;

  ngOnInit() {}

  receberUser(usuario:any) {

      this.user = usuario ;
  }

}
