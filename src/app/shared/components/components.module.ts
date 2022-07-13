import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CDataComponent } from 'src/app/shared/components/cData/cData.component';
import { AdicionarEnderecoComponent } from './modals/pessoa/adicionar-endereco/adicionar-endereco.component';
import { AdicionarFamiliaComponent } from './modals/pessoa/adicionar-familia/adicionar-familia/adicionar-familia.component';

@NgModule({
   imports: [
      CommonModule,
      MatDialogModule
   ],
   declarations: [
      CDataComponent,
      AdicionarEnderecoComponent,
      AdicionarFamiliaComponent
   ],
   exports: [
      CDataComponent,
      AdicionarEnderecoComponent
   ]
})
export class ComponentsModule { }

