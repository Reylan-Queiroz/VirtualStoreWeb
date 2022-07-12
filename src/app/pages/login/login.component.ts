import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm!: FormGroup;

   constructor(private _formBuilder: FormBuilder) {
   }

   ngOnInit() {
      this.loginForm = this._formBuilder.group({
         userName: ['', Validators.compose([
            Validators.minLength(3),
            Validators.required
         ])],
         password: ['', Validators.compose([
            Validators.minLength(1),
            Validators.required
         ])]
      });
   }

   onSubmit(loginForm: FormGroup) {}
}
