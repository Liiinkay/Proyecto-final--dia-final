import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ServicioUsuariosService } from '../../services/servicio-usuarios.service';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder,private servicio:ServicioUsuariosService) { 
    this.formulario=this.fb.group({
      nombres:['',Validators.required],
      apellidos:[''],
      rut:[''],
      correo:[''],
      password:[''],
      direccion:[''],
      region:[''],
      comuna:[''],
    });
  }

  ngOnInit(): void {
  }

  EnviarDatos(){

    this.servicio.CrearUsuarios({
      nombres:this.formulario.get("nombres")?.value,
      apellidos:this.formulario.get("apellidos")?.value,
      rut:this.formulario.get("rut")?.value,
      direccion:this.formulario.get("direccion")?.value,
      region:this.formulario.get("region")?.value,
      comuna:this.formulario.get("comuna")?.value,
      correo:this.formulario.get("correo")?.value,
      password:this.formulario.get("password")?.value
    }).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }
}
