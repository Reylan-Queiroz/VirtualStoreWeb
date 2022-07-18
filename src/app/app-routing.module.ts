import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { PrincipalComponent } from './pages/retaguarda/principal/principal.component';

const routes: Routes = [
   {
       path: "", pathMatch: "full", redirectTo: "login"
   },
   {
      path: 'login', //canActivate: [AuthorizedGuard],
       loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
   },
   {
      path: 'produto/cadastro',
      loadChildren: () => import('./pages/retaguarda/produto/cadastro-produto/cadastro-produto.module')
      .then(m => m.CadastroProdutoModule)
   },
   {
      path: 'dados-pessoa', loadChildren: () => import('./pages/retaguarda/pessoa/cadastro-pessoa/cadastro-pessoa.module')
         .then(m => m.CadastroPessoaModule)
   },
   {
      path: 'Auth/:login', component: PrincipalComponent
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
