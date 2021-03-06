import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-permissoes',
  templateUrl: './permissoes.component.html',
  styleUrls: ['./permissoes.component.scss']
})
export class PermissoesComponent implements OnInit {

   @Input() usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

}
