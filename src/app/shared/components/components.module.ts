import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CDataComponent } from 'src/app/shared/components/cData/cData.component';

const routes: Routes = [

];

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ComponentsModule
   ],
   declarations: [
      CDataComponent
   ],
   exports: [

   ]
})
export class ComponentsModule { }
