import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from '../interfaces/tickets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioTicketsService {
  // Aca tienes que poner la direccion que pusiste en el backend cesar, la que puse es solo un ejemplo
  servidor="http://127.0.01:3057";

  constructor(private servicio:HttpClient) { }

  ConsultarTickets():Observable<any>{
    // Aca el /tickets es un ejemplo, tienes que poner lo que pusiste en el backend
    // lo que pusiste en el metodo get
    return this.servicio.get(`${this.servidor}/mostrarDatos`);
  }
    // Aca ocurre lo mismo que lo de arriba, el /creartickets es solo un ejemplo
  CrearTickets(datos:Tickets):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearTickets`,JSON.stringify(datos),httpOptions);
  }
}
