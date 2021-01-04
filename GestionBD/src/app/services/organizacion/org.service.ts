import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient) { }

  crearOrg(Id: string, Nombre: string, Descripcion: string, Tipo: string){
    return this.http.post('http://localhost:8080/altas/organizacion', {Id: Id, Nombre: Nombre, Descripcion: Descripcion, Tipo: Tipo});
  }

  mostrarOrg(Id: string){
    return this.http.get(`http://localhost:8080/consultas/organizacion/${Id}`);
  }

  mostrarOrganizaciones(){
    return this.http.get('http://localhost:8080/consultas/organizaciones');
  }

  actualizarOrg(Id: string, Nombre: string, Descripcion: string, Tipo: string){
    return this.http.post('http://localhost:8080/actualizar/organizacion', {Id: Id, Nombre: Nombre, Descripcion: Descripcion, Tipo: Tipo});
  }

  borrarOrg(Id: string){
    return this.http.get(`http://localhost:8080/bajas/organizacion/${Id}`);
  }

}
