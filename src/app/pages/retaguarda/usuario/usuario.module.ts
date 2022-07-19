import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario.component';

import { LocalizarComponent } from './localizar/localizar.component';
import { PermissoesComponent } from './permissoes/permissoes.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrincipalComponent } from './principal/principal.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';


const routes: Routes = [
   {
      path: '',
      component: UsuarioComponent
   }
];

@NgModule({
   declarations: [
      UsuarioComponent,
      PrincipalComponent,
      LocalizarComponent,
      PermissoesComponent,
      DadosUsuarioComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      ComponentsModule
   ],
    exports: [
      UsuarioComponent,
    ],
})
export class UsuarioModule { }
