import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
