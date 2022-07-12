import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { DadosPessoaComponent } from './pages/retaguarda/pessoa/dados-pessoa/dados-pessoa.component';

const routes: Routes = [
   { path: "", pathMatch: "full", redirectTo: "login"},
   { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
   { path: 'produto/cadastro', canActivate: [AuthorizedGuard], loadChildren: () => import('./pages/retaguarda/produto/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoModule) },
   //{ path:'dados-pessoa', component: DadosPessoaComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
