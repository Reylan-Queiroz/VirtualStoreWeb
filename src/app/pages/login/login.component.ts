import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm!: FormGroup;

   constructor(
      private _formBuilder: FormBuilder,
      private authService: AuthService
      ) {
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

   login() {

      const userName = this.loginForm.get('userName')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.authenticate(userName, password)
      .subscribe(() => console.log('autenticado'),
         err => {
            console.log(err);
            this.loginForm.reset
         })
   }

   onSubmit(loginForm: FormGroup) {}
}
