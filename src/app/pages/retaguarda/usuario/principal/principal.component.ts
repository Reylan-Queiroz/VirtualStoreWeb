import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpregadoServices } from 'src/app/core/services/empregado.service';
import { EmpresaService } from 'src/app/core/services/empresa.Service';
import { FuncoesService } from 'src/app/core/services/funcoes.service';
import { UsuarioSevice } from 'src/app/core/services/usuario.service';
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

   cadastroUsuario!: FormGroup

   @Input() usuario: Usuario = new Usuario();
   public funcoes: Funcoes[]=[];
   public company: Empresa[]=[];
   public job: Empregado[]=[];
   public msgErro: string = '';


  constructor(
      private funcoesServices: FuncoesService,
      private empresaServices: EmpresaService,
      private empregadoService: EmpregadoServices,
      private fb: FormBuilder,
      private usuarioService: UsuarioSevice
      ) { }

  ngOnInit(){
   //this.usuario = new Usuario();
   this.funcoesServices.findAll().subscribe(
       functions => {
           this.funcoes = functions;
       },
       e => {
         console.log(e)
       }
     );

   //   this.empresaServices.findAll()
   //   .subscribe(
   //     empresas =>{
   //         this.company = empresas
   //     },
   //     e => {
   //       console.log(e);
   //     }
   //   );
   //   this.empregadoService.findAll()
   //   .subscribe(
   //     jobs =>{
   //         this.job = jobs;

   //     },
   //     e => {
   //       console.log(e);
   //     }
   //   );

     this.cadastroUsuario = this.fb.group({
         codigo: ['', Validators.compose([
            Validators.required,
            Validators.maxLength(6)
         ])],
         nome: ['', Validators.compose([
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(2)
         ])],
         senha: ['', Validators.compose([
            Validators.required,
            Validators.max(6)
         ])],
         descontoMax: [''],
         comissao: [''],
         funcoes: ['', Validators.compose([
            Validators.required
         ])],
         operadorCaixa: ['']

     })
   }

   criarUsuario() {
      console.log(this.usuario);
      this.usuario.codPessoa = "teste"

      this.usuarioService.save(this.usuario).subscribe()
   }



}
