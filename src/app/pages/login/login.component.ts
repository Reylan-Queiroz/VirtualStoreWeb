import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthenticateRequest } from 'src/app/shared/models/authenticateRequest.model';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



   loginForm!: FormGroup;
   @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;// obtendo referências do template para o focus

   constructor(
      private _formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router
      ) {}

   ngOnInit() {
      this.loginForm = this._formBuilder.group({
         login: ['', Validators.required],
         password: ['', Validators.required],
         dataBase: ['',Validators.required]
      });


   }

   login() {

      const login = this.loginForm.get('login')?.value;
      const password = this.loginForm.get('password')?.value;
      const dataBase = this.loginForm.get('dataBase')?.value

      this.authService.authenticate(new AuthenticateRequest(login, password), dataBase)
      .subscribe(() => this.router.navigate(['Auth', login]),
         err => {
            console.log(err);
            this.loginForm.reset();
            this.userNameInput.nativeElement.focus();
            alert('Dados incorreto !');
         });
   }

}
