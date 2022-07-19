export class NavbarModel {
   constructor(
      public Id: number,
      public Text: string,
      public Active: boolean,
      public Componente: any
   ) {}

   public setItem(id: number, text: string, active: boolean, componente: any) {
      this.Id = id;
      this.Text = text;
      this.Active = active;
      this.Componente = componente;
   }
}
