import { Component, OnInit } from '@angular/core';
import { Tickets,ListaTickets } from '../../interfaces/tickets';
import { ServicioTicketsService } from '../../services/servicio-tickets.service';

@Component({
  selector: 'app-mostrar-tickets',
  templateUrl: './mostrar-tickets.component.html',
  styleUrls: ['./mostrar-tickets.component.scss']
})
export class MostrarTicketsComponent implements OnInit {

  lista:Array<Tickets>=[];
  lista1:Array<Tickets>=[];
  lista2:Array<Tickets>=[];
  lista3:Array<Tickets>=[];
  estadoAbierto:string="Abierto";
  estadoEnDesarrollo:string="En Desarrollo";
  estadoCerrado:string="Cerrado";
  // lista:Array<Tickets>=[]; <-- La lista de arriba es de prueba, cuando estes probando el backend
  // tienes que comentar o borrar la de arriba, y ocupar la que esta aqui.

  constructor(private servicioTickets:ServicioTicketsService) { }

  ngOnInit(): void {
    this.servicioTickets.ConsultarTickets().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
        if(datos[i].estado==this.estadoAbierto){
          this.lista1.push(datos[i]);
        }
        if(datos[i].estado==this.estadoEnDesarrollo){
          this.lista2.push(datos[i]);
        }
        if(datos[i].estado==this.estadoCerrado){
          this.lista3.push(datos[i]);
        }
      }
    });
  }

}