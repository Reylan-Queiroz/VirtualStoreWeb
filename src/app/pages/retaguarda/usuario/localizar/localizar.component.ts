import {
   AfterViewInit,
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
   ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
   @Input() usuario: Usuario = new Usuario();
   public users: Usuario[] = [];
   public functions: Funcoes[] | undefined;
   dataSource!: MatTableDataSource<Usuario>;
   displayedColumns: string[] = [
      'nome',
      'codigoFuncao',
      'descontoMax',
      'comissao',
   ];

   @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
   @ViewChild(MatSort, { static: false }) sort!: MatSort;

   constructor(
      private _usuarioService: UsuarioSevice,
      private _functionService: FuncoesService,

   ) {}

   async ngAfterViewInit() {
      await this.load();


   }

   async ngOnInit() {
   }

   obterUsuario(user: Usuario) {

      this.newItem.emit(user);

   }

   async load() {
      await this._usuarioService
         .findAll()
         .toPromise()
         .then((res) => {
            this.users = res;



         });

         await this._functionService
         .findAll()
         .toPromise()
         .then((res) => {
            this.functions = res;
         });

         this.users.forEach(usuario => {
            usuario.funcao = this.GetByFuncId(usuario.codigoFuncao);

         });

         this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
   }

   public GetByFuncId(codigo: number): Funcoes | undefined {
         return this.functions?.find((f) => f.codigo == codigo);
   }


   GetUser(usuarioSelect: Usuario) {
      this.newItem.emit(usuarioSelect);
      this.usuario = usuarioSelect;
      document.getElementById('btn_0')?.click();
   }

   remove() {
      this.usuario.excluido = true;
      this._usuarioService.update(0, this.usuario).subscribe(() => this.users); // didatica não funciona
   }

   applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
      }
   }
}
