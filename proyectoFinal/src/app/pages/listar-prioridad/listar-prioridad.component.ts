import { Component, OnInit } from '@angular/core';
import {Tickets,ListaTickets} from '../../interfaces/tickets';
import  {ServicioTicketsService} from '../../services/servicio-tickets.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-listar-prioridad',
  templateUrl: './listar-prioridad.component.html',
  styleUrls: ['./listar-prioridad.component.scss']
})
export class ListarPrioridadComponent implements OnInit {
  lista:Array<Tickets>=ListaTickets;
  formulario:FormGroup;
  buscarDato:string='';

  constructor(private servicio:ServicioTicketsService,private fb:FormBuilder) {
     this.formulario=this.fb.group({
       prioridad:['']
     })
   }

  ngOnInit(): void {
    this.servicio.ConsultarTickets().subscribe(datos=>{
      console.log(datos.length);
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
      }
    });
  }

  buscarTickets(){
    this.buscarDato=this.formulario.get('prioridad')?.value;
  }
}
