import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CDataComponent } from 'src/app/shared/components/cData/cData.component';

@NgModule({
   imports: [
      CommonModule,
   ],
   declarations: [
      CDataComponent
   ],
   exports: [
      CDataComponent
   ]
})
export class ComponentsModule { }
