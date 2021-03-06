import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
   {
      path: '',
      component: LoginComponent
   }
];

@NgModule({
   declarations: [
      LoginComponent,
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      HttpClientModule,
      RouterModule
   ],
    exports: [
      LoginComponent,
    ],
})
export class LoginModule { }
