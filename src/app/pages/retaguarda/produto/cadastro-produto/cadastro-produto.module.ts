import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { ConversaoMedidasComponent } from './components/conversao-medidas/conversao-medidas.component';
import { DadosProdutoComponent } from './components/dados-produto/dados-produto.component';
import { TabelaPrecoComponent } from './components/tabela-preco/tabela-preco.component';

const routes: Routes = [
   {
      path: '',
      component: CadastroProdutoComponent
   }
];

@NgModule({
   declarations: [
      CadastroProdutoComponent,

      DadosProdutoComponent,
      TabelaPrecoComponent,
      ConversaoMedidasComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),

      ComponentsModule
   ],
   exports: [
      CadastroProdutoComponent,
   ]
})
export class CadastroProdutoModule { }
