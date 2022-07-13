import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Familia } from 'src/app/shared/models/familia.model';
import { TipoCadastro } from 'src/app/shared/models/tipoCadastro.model';
import { Uf } from 'src/app/shared/models/uf.model';
import { AddEnderecoModel } from 'src/app/shared/models/addEndereco.model';
import { AddEnderecoService } from 'src/app/core/services/addEndereco.service';
import { UFServices } from 'src/app/core/services/uf.service';

@Component({
  selector: 'app-adicionar-endereco',
  templateUrl: './adicionar-endereco.component.html',
  styleUrls: ['./adicionar-endereco.component.scss']
})
export class AdicionarEnderecoComponent implements OnInit {

   modalFormEndereco!: FormGroup;

  constructor(
     private fb: FormBuilder,
     private addEnderecoService: AddEnderecoService,
     private uf: UFServices
   ) { }

  public tipoCad: TipoCadastro[] = [];
   public tipoFamilia: Familia[] = [];
   public tipoUF: Uf[] = [];
   public addEndereco: AddEnderecoModel[] = [];

  ngOnInit() {

   this.uf.findAll().subscribe(
      tiposUF => {
        this.tipoUF = tiposUF

      }
    )

   this.addEnderecoService.findAll().subscribe(
      addEndereco => {
        this.addEndereco = addEndereco
        console.log(addEndereco)
      }
    )

     this.modalFormEndereco = this.fb.group({
      tipo: ['', Validators.compose([
         Validators.required
      ])],
      Endereco: ['', Validators.compose([
         Validators.required
      ])],
      numero: ['', Validators.compose([
         Validators.required
      ])],
      pontoRef: ['', Validators.compose([
         Validators.required
      ])],
      bairro: ['', Validators.compose([
         Validators.required
      ])],
      cep: ['', Validators.compose([
         Validators.required
      ])],
      uf: ['', Validators.compose([
         Validators.required
      ])],
      cidade: ['', Validators.compose([
         Validators.required
      ])]
     })
  }

}
