import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizarComponent } from 'src/app/pages/retaguarda/usuario/localizar/localizar.component';
import { PermissoesComponent } from 'src/app/pages/retaguarda/usuario/permissoes/permissoes.component';
import { PrincipalComponent } from 'src/app/pages/retaguarda/usuario/principal/principal.component';
import { NavbarModel } from '../../models/navbar.model';
import { Usuario } from '../../models/usuario.model';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
   public Tabs: NavbarModel[] = [];
   public TabActive: NavbarModel[] = [];

   @Input() usuario!: Usuario;
   public returnUrl = '';

   constructor(private router: Router) {}
   addItem(value: Usuario) {
      this.usuario = value;
      // console.log(value)
   }

   NavigationTab(index: number) {
      // var x = this.Tabs.filter(t => t. == true)
      console.log(index);
   }

   ngOnInit() {
      // this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
      const tab1 = new NavbarModel(0, "principal", true, PrincipalComponent);
      const tab2 = new NavbarModel(2, "permissao", false, PermissoesComponent);
      const tab3 = new NavbarModel(3, "localizar", false, LocalizarComponent);

      tab1.setItem(1, 'Principal', true, PrincipalComponent);
      tab2.setItem(2, 'Permissões', false, PermissoesComponent);
      tab3.setItem(3, 'Localizar', false, LocalizarComponent);

      this.Tabs.push(tab1, tab2, tab3);
   }
}

// export class NavbarModel {
//    public Id: number;
//    public Text: string;
//    public Active: boolean;
//    public Componente: any;

//    constructor() {}

//    public setItem(id: number, text: string, active: boolean, componente: any) {
//       this.Id = id;
//       this.Text = text;
//       this.Active = active;
//       this.Componente = componente;
//    }
// }
function principalComponent(
   arg0: number,
   arg1: string,
   arg2: boolean,
   principalComponent: any
) {
   throw new Error('Function not implemented.');
}

function permissoesComponent(
   arg0: number,
   arg1: string,
   arg2: boolean,
   permissoesComponent: any
) {
   throw new Error('Function not implemented.');
}
