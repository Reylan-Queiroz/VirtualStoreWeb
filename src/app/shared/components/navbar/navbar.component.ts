import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      const tab1 = new NavbarModel();
      const tab2 = new NavbarModel();
      const tab3 = new NavbarModel();

      tab1.setItem(1, 'Principal', true, principalComponent);
      tab2.setItem(2, 'Permissões', false, permissoesComponent);
      tab3.setItem(3, 'Localizar', false, principalComponent);

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
