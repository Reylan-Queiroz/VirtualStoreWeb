import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './pages/login/login.module';
import { CadastroPessoaModule } from './pages/retaguarda/pessoa/cadastro-pessoa/cadastro-pessoa.module';
import { UsuarioModule } from './pages/retaguarda/usuario/usuario.module';


@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      CadastroPessoaModule,
      LoginModule,
      UsuarioModule,
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [AppComponent],
})
export class AppModule { }
