import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto.component';

const routes: Routes = [
   {
      path: '',
      component: CadastroProdutoComponent
   }
];

@NgModule({
   declarations: [
      CadastroProdutoComponent,
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
   ],
   exports: [
      CadastroProdutoComponent,
   ]
})
export class CadastroProdutoModule { }
