import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { MainComponent} from './pages/retaguarda/main/main.component';

const routes: Routes = [
   {
       path: "", pathMatch: "full", redirectTo: "login"
   },
   {
      path: 'login',
         loadChildren: () => import('./pages/login/login.module')
         .then(m => m.LoginModule)
   },
   {
      path: 'Auth/:login', component: MainComponent
   },
   {
      path: 'produto/cadastro',
          loadChildren: () => import('./pages/retaguarda/produto/cadastro-produto/cadastro-produto.module')
         .then(m => m.CadastroProdutoModule)
   },
   {
      path: 'dados-pessoa',
          loadChildren: () => import('./pages/retaguarda/pessoa/cadastro-pessoa/cadastro-pessoa.module')
         .then(m => m.CadastroPessoaModule)
   },

   {
      path: 'usuario',
          loadChildren: () => import('./pages/retaguarda/usuario/usuario.module')
          .then(m => m.UsuarioModule)

   },
   {
      path: 'estoque',
          loadChildren:() => import('./pages/retaguarda/estoque/estoque.component')
   }

];

@NgModule({
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
