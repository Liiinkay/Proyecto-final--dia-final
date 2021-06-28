import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ServicioDeSesionService } from '../../services/servicio-de-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  formulario:FormGroup;
  
  constructor(private form:FormBuilder, private servicio:ServicioDeSesionService, private route:Router) {
    this.formulario=this.form.group({
       usuario:['',],
       password:['',],
     });
  }


  ngOnInit(){}

  ValidarLogin(){
    this.servicio.ConsultarAutentificacion({
      nombres:"1",
      apellidos:"1",
      rut:"1",
      direccion:"1",
      region:"1",
      comuna:"1",
      correo:this.formulario.get("usuario")?.value,
      password:this.formulario.get("password")?.value
    }).subscribe(respuesta=>{
      console.log(respuesta);
      if(respuesta==2){
        this.route.navigate(['/crear-ticket']);
      } 
    });
  }
}
