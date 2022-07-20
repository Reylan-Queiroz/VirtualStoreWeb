import {
   AfterViewInit,
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
} from '@angular/core';
import { FuncoesService } from 'src/app/core/services/funcoes.service';
import { UsuarioSevice } from 'src/app/core/services/usuario.service';
import { Funcoes } from 'src/app/shared/models/funcoes.model';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
   selector: 'app-localizar',
   templateUrl: './localizar.component.html',
   styleUrls: ['./localizar.component.scss'],
})
export class LocalizarComponent implements OnInit, AfterViewInit {
   @Output() newItem = new EventEmitter<Usuario>();
   @Input() usuario!: Usuario;
   public users: any[] = [];
   public functions: Funcoes | undefined;

   constructor(
      private _usuarioService: UsuarioSevice,
      private _functionService: FuncoesService,
   ) {}

   async ngAfterViewInit() {}

   async ngOnInit() {
      this.functions = new Funcoes(1, 'user');

      await this.load();

      this.GetByFuncId(1);
   }

   async load() {
      await this._usuarioService
         .findAll()
         .toPromise()
         .then((res) => (this.users = res));
   }

   public GetByFuncId(codigo: number): Funcoes | undefined {
      this._functionService.findAll().subscribe((funcs) => {
         this.functions = funcs.find((f) => f.Codigo == codigo);
      });
      //console.log(this.functions)
      return this.functions;
   }

   GetUser(usuarioSelect: Usuario) {
      this.newItem.emit(usuarioSelect);
      this.usuario = usuarioSelect;
      document.getElementById('btn_0')?.click();
      console.log(usuarioSelect);
   }

   remove() {
      this._usuarioService
      .update(0,this.usuario)
      .subscribe(() => this.users)// didatica não funciona
   }

}
