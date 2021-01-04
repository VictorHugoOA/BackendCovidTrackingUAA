import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  crearUsuario(Usuario: string, Nombre: string, Correo: string, Contrasena: string, autFacebook: number, IMEI: number, Riesgo: string, FechaRojo: Date, Admin: number) {
    return this.http.post('http://localhost:8080/altas/persona', {
      Usuario: Usuario,
      Nombre: Nombre,
      Correo: Correo,
      Contrasena: Contrasena,
      autFacebook: autFacebook,
      IMEI: IMEI,
      Riesgo: Riesgo,
      FechaRojo: FechaRojo,
      Admin: Admin
    });
  }

  mostrarUsuario(Usuario: string) {
    return this.http.get(`http://localhost:8080/consultas/persona/${Usuario}`).pipe(map((data: any) => {return data[0];}));
  }

  mostrarUsuarios() {
    return this.http.get('http://localhost:8080/consultas/personas');
  }

  actualizarUsuario(Usuario: string, Nombre: string, Correo: string, Contrasena: string, autFacebook: number, IMEI: number, Riesgo: string, FechaRojo: Date, Admin: number) {
    return this.http.post('http://localhost:8080/actualizar/persona', {
      Usuario: Usuario,
      Nombre: Nombre,
      Correo: Correo,
      Contrasena: Contrasena,
      autFacebook: autFacebook,
      IMEI: IMEI,
      Riesgo: Riesgo,
      FechaRojo: FechaRojo,
      Admin: Admin
    });
  }

  mostrarVisitasUsuario(Usuario:string){
    return this.http.get(`http://localhost:8080/consultas/visitasUsuario/${Usuario}`);
  }

  borrarUsuario(Usuario: string) {
    return this.http.get(`http://localhost:8080/bajas/persona/${Usuario}`);
  }

}
