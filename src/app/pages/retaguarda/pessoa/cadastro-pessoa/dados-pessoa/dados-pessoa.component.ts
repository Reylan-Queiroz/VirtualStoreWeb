import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamiliaService } from 'src/app/core/services/familia.service';
import { Familia } from 'src/app/shared/models/familia.model';
import { AdicionarFamiliaComponent } from 'src/app/shared/components/modals/pessoa/adicionar-familia/adicionar-familia/adicionar-familia.component';
import { TipoCadastro } from 'src/app/shared/models/tipoCadastro.model';
import { Uf } from 'src/app/shared/models/uf.model';
import { MatDialog } from '@angular/material/dialog';
import { TipoCadastroService } from 'src/app/core/services/tipo-cadastro.service';
import { UFServices } from 'src/app/core/services/uf.service';
import { UsuarioSevice } from 'src/app/core/services/usuario.service';


@Component({
   selector: 'app-dados-pessoa',
   templateUrl: './dados-pessoa.component.html',
   styleUrls: ['./dados-pessoa.component.scss'],
})
export class DadosPessoaComponent implements OnInit {

   formCadPessoa!: FormGroup;

   constructor(
      private fb: FormBuilder,
      private familiaServices: FamiliaService,
      private tipoCadastroServices: TipoCadastroService,
      private ufService: UFServices,
      private usuarioService: UsuarioSevice,
      private matDialog: MatDialog
   ) {}

   public tipoCad: TipoCadastro[] = [];
   public tipoFamilia: Familia[] = [];
   public tipoUF: Uf[] = [];


   ngOnInit(): void {
      this.tipoCadastroServices.findAll().subscribe(
         tiposCad => {
           this.tipoCad = tiposCad

         }
       )

       this.familiaServices.findAll().subscribe(
         tiposFamilia => {
           this.tipoFamilia = tiposFamilia

         }
       )

       this.ufService.findAll().subscribe(
         tiposUF => {
           this.tipoUF = tiposUF

         }
       )

      this.formCadPessoa = this.fb.group({
         tipoCadastro: ['', Validators.compose([Validators.required])],
         familia: [''],
         cpf: ['', Validators.required],
         rg: ['', Validators.required],
         sexo: ['', Validators.required],
         nome: ['', Validators.compose([Validators.required])],
         apelido: ['', Validators.compose([Validators.maxLength(40)])],
         dataNacimento: ['', Validators.compose([])],
         endereco: ['', Validators.compose([Validators.required])],
         numero: ['', Validators.compose([Validators.required])],
         pontoRef: [
            '',
            Validators.compose([Validators.required, Validators.maxLength(50)]),
         ],
         bairro: [
            '',
            Validators.compose([Validators.required, Validators.maxLength(30)]),
         ],
         cep: ['', Validators.compose([Validators.required])],
         uf: ['', Validators.required],
         cidade: ['', Validators.required],
         residente: [''],
         comercial: [''],
         celular1: [''],
         celular2: [''],
         vendedor: [''],
         crediario: [''],
         limiteCred: [''],
         observacao: [''],
      });
   }

   openModalFamiliaEndereco(){
       const dialogRef = this.matDialog.open(AdicionarFamiliaComponent, {
         width: '30rem',
          data: {},
       });
       }
}
