import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabEmailComponent } from './pages/retaguarda/pessoa/tabEmail/tab-email/tab-email.component';
import { TabEnderecoComponent } from './pages/retaguarda/pessoa/tabEndereco/tab-endereco/tab-endereco.component';

@NgModule({
   declarations: [
      AppComponent,
      TabEmailComponent,
      TabEnderecoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [AppComponent],
})
export class AppModule { }
