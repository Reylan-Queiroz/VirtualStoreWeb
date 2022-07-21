import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.scss']
})
export class DadosUsuarioComponent implements OnInit {

   public usuario: Usuario = new Usuario();

   addItem(value: Usuario) {
     this.usuario = value;
   }
   ngOnInit() {
     //this.usuario = new Usuario();
     setTimeout(function () {
       document.getElementById('btn_0')?.click();
     }, 10);
   }
   constructor() {

   }

   NavSearch(){
     document.getElementById("nav-principal")?.classList.remove("active");
     document.getElementById("nav-principal-tab")?.classList.remove("active");

     document.getElementById("nav-localizar")?.classList.add("active");
     document.getElementById("nav-localizar")?.classList.add("show");
     document.getElementById("nav-localizar-tab")?.classList.add("active");
   }

}
