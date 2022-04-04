import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
   //{ path: 'produto/cadastro', loadChildren: () => import('./pages/retaguarda/produto/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule) },
   //{ path: 'pessoa/cadastro-pessoa', loadChildren: () => import('./pages/retaguarda/pessoa/cadastro-pessoa/cadastro-pessoa.module').then(m => m.CadastroPessoaModule) }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
