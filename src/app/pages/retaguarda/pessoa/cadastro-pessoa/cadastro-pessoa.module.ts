import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';

const routes: Routes = [
   {
      path: '',
      component: CadastroPessoaComponent
   }
];

@NgModule({
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
   ],
   declarations: [
      CadastroPessoaComponent,
   ],
   exports: [
      CadastroPessoaComponent,
   ]
})

   export class CadastroPessoaModule { }
