import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
};

@Injectable({ 
  providedIn: 'root'
})
export class ServicioUsuariosService {
  // Aca tienes que poner la direccion que pusiste en el backend cesar, la que puse es solo un ejemplo
  servidor="http://127.0.01:3057";

  constructor(private servicio:HttpClient) { }

  ConsultarUsuarios():Observable<any>{
    // Aca el /usuarios es un ejemplo, tienes que poner lo que pusiste en el backend
    // lo que pusiste en el metodo get
    return this.servicio.get(`${this.servidor}/mostrarUsuarios`);
  }
    // Aca ocurre lo mismo que lo de arriba, el /crearusuarios es solo un ejemplo
  CrearUsuarios(datos:Usuarios):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearUsuario`,JSON.stringify(datos),httpOptions);
  }
}