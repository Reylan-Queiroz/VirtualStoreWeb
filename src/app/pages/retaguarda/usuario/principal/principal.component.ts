import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { EmpregadoServices } from 'src/app/core/services/empregado.service';
import { EmpresaService } from 'src/app/core/services/empresa.Service';
import { FuncoesService } from 'src/app/core/services/funcoes.service';
import { Empregado } from 'src/app/shared/models/empregado.model';
import { Empresa } from 'src/app/shared/models/empresa.Model';
import { Funcoes } from 'src/app/shared/models/funcoes.model';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

   @Input() usuario!:Usuario;
   public funcoes: Funcoes[]=[];
   public company: Empresa[]=[];
   public job: Empregado[]=[];
   public msgErro: string = '';


  constructor(
      private funcoesServices: FuncoesService,
      private empresaServices: EmpresaService,
      private empregadoService: EmpregadoServices
      ) { }

  ngOnInit(){
   // this.usuario = new Usuario();
   this.funcoesServices.findAll().subscribe(
       functions => {
           this.funcoes = functions;
       },
       e => {
         console.log(e.error)
       }
     ),

     this.empresaServices.findAll()
     .subscribe(
       empresas =>{
           this.company = empresas
       },
       e => {
         console.log(e.error);
       }
     ),
     this.empregadoService.findAll()
     .subscribe(
       jobs =>{
           this.job = jobs;

       },
       e => {
         console.log(e.error);
       }
     )
}

}
