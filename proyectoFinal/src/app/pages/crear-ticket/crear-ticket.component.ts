import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ServicioTicketsService } from 'src/app/services/servicio-tickets.service';
import { ServicioDeSesionService } from '../../services/servicio-de-sesion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.scss']
})
export class CrearTicketComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder,private servicio:ServicioTicketsService,private servicio2:ServicioDeSesionService, private route:Router) { 
    this.formulario=this.fb.group({
      prioridad:['',Validators.required],
      categoria:[''],
      asunto:[''],
      descripcion:['']
    });
  }
    
  ngOnInit(): void {
    this.servicio2.ConsultarSesion().subscribe(datos=>{
      console.log(datos);
    });
  }
  EnviarDatos(){
    //console.log(this.formulario.get("asunto")?.value);
    this.servicio.CrearTickets({
      id:0,
      estado:"Abierto",
      prioridad:this.formulario.get("prioridad")?.value,
      categoria:this.formulario.get("categoria")?.value,
      asunto:this.formulario.get("asunto")?.value,
      descripcion:this.formulario.get("descripcion")?.value,
    }).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }


}
