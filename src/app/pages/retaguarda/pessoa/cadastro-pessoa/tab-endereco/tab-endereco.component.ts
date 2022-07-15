import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FamiliaService } from 'src/app/core/services/familia.service';
import { UFServices } from 'src/app/core/services/uf.service';
import { AdicionarEnderecoComponent } from 'src/app/shared/components/modals/pessoa/adicionar-endereco/adicionar-endereco.component';
import { Familia } from 'src/app/shared/models/familia.model';
import { Uf } from 'src/app/shared/models/uf.model';
import { AddEnderecoModel } from 'src/app/shared/models/addEndereco.model';
import { AddEnderecoService } from 'src/app/core/services/addEndereco.service';

@Component({
  selector: 'app-tab-endereco',
  templateUrl: './tab-endereco.component.html',
  styleUrls: ['./tab-endereco.component.scss']
})
export class TabEnderecoComponent implements OnInit {

   formTabEndereco!: FormGroup

  constructor(
     private fb: FormBuilder,
     private familiaServices: FamiliaService,
     private ufService: UFServices,
     private addEnderecoService: AddEnderecoService,
     private matDialog: MatDialog) { }

     public tipoFamilia: Familia[] = [];
     public tipoUF: Uf[] = [];
     public addEndereco: AddEnderecoModel[] = [];

  ngOnInit(): void {
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

    this.addEnderecoService.findAll().subscribe(
      addEndereco => {
        this.addEndereco = addEndereco
        console.log(addEndereco)
      }
    )


   this.formTabEndereco = this.fb.group({
      familia: ['', Validators.compose([
         Validators.required
      ])],
      endereco: ['', Validators.compose([
         Validators.required
      ])],
      numero:  ['', Validators.compose([
         Validators.required
      ])],
      pontoRef:  ['', Validators.compose([
         Validators.required
      ])],
      bairro:  ['', Validators.compose([
         Validators.required
      ])],
      cep:  ['', Validators.compose([
         Validators.required
      ])],
      uf:  ['', Validators.compose([
         Validators.required
      ])],
      cidade:  ['', Validators.compose([
         Validators.required
      ])],

   })
  }

  openModalAdicionarEndereco(){
   const dialogRef = this.matDialog.open(AdicionarEnderecoComponent, {
      width: '40rem',
      panelClass: 'custom-dialog-container',
      data: {},
    });

   //  dialogRef.afterClosed().subscribe(result => {
   //    console.log('The dialog was closed');
   //    this.animal = result;
   //  });
  }

}
