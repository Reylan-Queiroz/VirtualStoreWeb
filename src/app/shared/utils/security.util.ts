import { environment } from "src/environments/environment";
import { Usuario } from "../models/usuario.model";

export class Security {
   public static set(user: Usuario, token: string) {
      const data = JSON.stringify(user);

      localStorage.setItem(environment.vsUser, btoa(data));
      localStorage.setItem(environment.vsToken, token);
   }

   public static setUser(user: Usuario) {
      const data = JSON.stringify(user);

      localStorage.setItem(environment.vsUser, btoa(data));
   }

   public static setToken(token: string) {
      localStorage.setItem(environment.vsToken, token);
   }

   public static getUser(): Usuario {
      const data = localStorage.getItem(environment.vsUser);

      if (data)
         return JSON.parse(atob(data));
      else
         return null as any;
   }

   public static getToken(): string {
      const data = localStorage.getItem(environment.vsToken);

      if (data)
         return data;
      else
         return null as any;
   }

   public static hasToken(): boolean {
      if (this.getToken())
         return true;
      else
         return false;
   }

   public static getDataBaseName():string{
      const data = localStorage.getItem("databaseName")

      if (data)
         return data;
      else
         return null as any;
   }

   // public static isInRole(roles: Role[]): boolean {
   //    const user = this.getUser();

   //    if (!user)
   //       return false;

   //    return roles.indexOf(user.roleId) >= 0;
   // }

   public static clear() {
      localStorage.removeItem(environment.vsUser);
      localStorage.removeItem(environment.vsToken);
   }
}
