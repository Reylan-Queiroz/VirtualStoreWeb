import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   form: FormGroup;

   constructor(
      private _formBuilder: FormBuilder,
   ) {
      this.form = this._formBuilder.group({
         login: ['', Validators.compose([
            Validators.minLength(3),
            Validators.required
         ])],
         password: ['', Validators.compose([
            Validators.minLength(1),
            Validators.required
         ])]
      });
   }

   ngOnInit() {
   }

   onSubmit(form: FormGroup) {

   }
}
