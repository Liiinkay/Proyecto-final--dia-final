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
export class ServicioDeSesionService {
  
  servidor="http://127.0.01:3057";

  constructor(private servicio:HttpClient) { }

  ConsultarAutentificacion(datos:Usuarios):Observable<any>{
      return this.servicio.post(`${this.servidor}/autentificacion`,JSON.stringify(datos),httpOptions);
  }

  ConsultarSesion():Observable<any>{
    return this.servicio.get(`${this.servidor}/verificar-login`);
  }
}
