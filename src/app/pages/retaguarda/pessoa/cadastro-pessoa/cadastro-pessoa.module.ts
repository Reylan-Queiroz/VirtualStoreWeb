import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskModule} from 'ng2-currency-mask';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { TabEmailComponent } from './tab-email/tab-email.component';
import { TabEnderecoComponent } from './tab-endereco/tab-endereco.component';
import { DadosPessoaComponent } from './dados-pessoa/dados-pessoa.component';

import {MatDialogModule} from '@angular/material/dialog';
import { PrincipalComponent } from '../../principal/principal.component';

const maskConfig: Partial<IConfig> = {
   validation: false,
 };

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
      RouterModule.forChild(routes),
      NgxMaskModule.forRoot(maskConfig),
      CurrencyMaskModule,
      ComponentsModule,
      MatDialogModule
   ],
   declarations: [
      CadastroPessoaComponent,
      TabEmailComponent,
      TabEnderecoComponent,
      DadosPessoaComponent,
      PrincipalComponent
   ],
   exports: [
      CadastroPessoaComponent,
   ],
})

   export class CadastroPessoaModule { }
