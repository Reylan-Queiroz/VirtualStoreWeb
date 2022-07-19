import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CDataComponent } from 'src/app/shared/components/cData/cData.component';
import { AdicionarEnderecoComponent } from './modals/pessoa/adicionar-endereco/adicionar-endereco.component';
import { AdicionarFamiliaComponent } from './modals/pessoa/adicionar-familia/adicionar-familia/adicionar-familia.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskModule} from 'ng2-currency-mask';
import { NavbarComponent } from './navbar/navbar.component';


const maskConfig: Partial<IConfig> = {
   validation: false,
 };

@NgModule({
   imports: [
      CommonModule,
      MatDialogModule,
      NgxMaskModule,
      CurrencyMaskModule,
   ],
   declarations: [
      CDataComponent,
      AdicionarEnderecoComponent,
      AdicionarFamiliaComponent,
      NavbarComponent,
   ],
   exports: [
      CDataComponent,
      AdicionarEnderecoComponent,
      NavbarComponent
   ]
})
export class ComponentsModule { }

