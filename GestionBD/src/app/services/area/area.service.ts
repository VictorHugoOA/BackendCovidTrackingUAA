import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  crearArea(Id: string, Id_Organizacion: string,
    Nombre: string, Descripcion: string, Edificio: String, Piso: string, QR: string,
    Riesgo: string, FechaRojo: Date, Latitud: number, Longitud: number) {
    return this.http.post('http://localhost:8080/altas/area', {
      Id: Id,
      Id_Organizacion: Id_Organizacion,
      Nombre: Nombre,
      Descripcion: Descripcion,
      Edificio: Edificio,
      Piso: Piso,
      QR: QR,
      Riesgo: Riesgo,
      FechaRojo: FechaRojo,
      Latitud: Latitud,
      Longitud: Longitud
    });
  }

  mostarArea(Id: string) {
    return this.http.get(`http://localhost:8080/consultas/area/${Id}`);
  }

  mostrarTodasAreas(){
    return this.http.get('http://locahost:8080/consultas/areas');
  }

  borrarArea(Id: string){
    return this.http.get(`http://localhost:8080/bajas/area/${Id}`);
  }

  actualizarArea(Id: string, Id_Organizacion: string,
    Nombre: string, Descripcion: string, Edificio: String, Piso: string, QR: string,
    Riesgo: string, FechaRojo: Date, Latitud: number, Longitud: number) {
    return this.http.post('http://localhost:8080/actualizar/area', {
      Id: Id,
      Id_Organizacion: Id_Organizacion,
      Nombre: Nombre,
      Descripcion: Descripcion,
      Edificio: Edificio,
      Piso: Piso,
      QR: QR,
      Riesgo: Riesgo,
      FechaRojo: FechaRojo,
      Latitud: Latitud,
      Longitud: Longitud
    });
  }

}
