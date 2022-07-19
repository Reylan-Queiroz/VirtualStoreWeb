import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FamiliaService } from 'src/app/core/services/familia.service';
import { TipoCadastroService } from 'src/app/core/services/tipo-cadastro.service';
import { UFServices } from 'src/app/core/services/uf.service';

import { Familia } from 'src/app/shared/models/familia.model';
import { TipoCadastro } from 'src/app/shared/models/tipoCadastro.model';
import { Uf } from 'src/app/shared/models/uf.model';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

   formCadPessoa!: FormGroup;

  constructor(
   private fb: FormBuilder,
   private familiaServices: FamiliaService,
   private tipoCadastroServices: TipoCadastroService,
   private ufService: UFServices,
   private matDialog: MatDialog
   ) { }

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
      tipoCadastro: ['', Validators.compose([
         Validators.required
      ])],
      familia: ['', Validators.compose([
         Validators.required
      ])],
      cpf: ['', Validators.compose([
         Validators.required
      ])],
      rg: ['', Validators.compose([
         Validators.required
      ])],
      sexo: ['', Validators.compose([
         Validators.required
      ])],
      nome: ['', Validators.compose([
         Validators.required
      ])],
      apelido: ['', Validators.compose([
         Validators.maxLength(40)
      ])],
      dataNacimento: ['', Validators.compose([
         Validators.required
      ])],
      endereco: ['', Validators.compose([
         Validators.required
      ])],
      numero: ['', Validators.compose([
         Validators.required
      ])],
      pontoRef: ['', Validators.compose([
         Validators.required,
         Validators.maxLength(50)
      ])],
      bairro: ['', Validators.compose([
         Validators.required,
         Validators.maxLength(30)
      ])],
      cep: ['', Validators.compose([
         Validators.required
      ])],
      uf: ['', Validators.compose([
         Validators.required
      ])],
      cidade: ['', Validators.compose([
         Validators.required
      ])],
      residente: ['', Validators.compose([
         Validators.required
      ])],
      comercial: ['', Validators.compose([
         Validators.required
      ])],
      celular1: ['', Validators.compose([
         Validators.required
      ])],
      celular2: ['', Validators.compose([
         Validators.required
      ])],
      Vendedor: ['', Validators.compose([
         Validators.required
      ])],
      crediario:['', Validators.compose([
         Validators.required
      ])],
      limiteCred: ['', Validators.compose([
         Validators.required
      ])],
      observacao: ['', Validators.compose([
         Validators.required
      ])],
    })
  }
   value: string = "";
  onSubmit() {
   console.log(this.formCadPessoa.value)

   //this.createForm(new CadPessoa());
 }

}
