import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor() { }
  
  crearActividad(idAct: string, titulo: string, fecha: string, descripcion: string, hora: string, retraso: number, idProf: string)
  {
    return this.http.post('http://localhost:3000/ActualizarActividad', {id: idAct, titulo: titulo, fecha: fecha, desc: descripcion, hora: hora, retraso: retraso, idprof: idProf});
  }
}
