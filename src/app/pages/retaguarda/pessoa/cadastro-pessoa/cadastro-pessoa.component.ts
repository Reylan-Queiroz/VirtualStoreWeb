import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {

   formCadPessoa!: FormGroup;

   constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.formCadPessoa = this.fb.group({
      tipoCadastro: ['', Validators.compose([
         Validators.required
      ])],
      familia: [''],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      sexo: ['', Validators.required],
      nome: ['', Validators.compose([
         Validators.required
      ])],
      apelido: ['', Validators.compose([
         Validators.maxLength(40)
      ])],
      dataNacimento: ['',Validators.compose([

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
      uf: ['',Validators.required],
      cidade: ['',Validators.required],
      residente: ['',],
      comercial: [''],
      celular1: [''],
      celular2: [''],
      Vendedor: [''],
      crediario: [''],
      limiteCred: [''],
      observacao: ['']
    })
  }

}
