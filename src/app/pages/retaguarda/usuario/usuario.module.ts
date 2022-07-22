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
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import { CurrencyMaskModule} from 'ng2-currency-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
   validation: false,
 };

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
      DadosUsuarioComponent,
      NavbarComponent,

   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      ComponentsModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatTableModule,
      MatInputModule,
      MatSortModule,
      MatRippleModule,
      NgxMaskModule,
      CurrencyMaskModule
   ],
    exports: [
      UsuarioComponent,
      PrincipalComponent
    ],
})
export class UsuarioModule { }
