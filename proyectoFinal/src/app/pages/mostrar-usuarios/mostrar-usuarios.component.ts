import { Component, OnInit } from '@angular/core';
import { Usuarios} from '../../interfaces/usuarios';
import { ServicioUsuariosService } from '../../services/servicio-usuarios.service';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.scss']
})
export class MostrarUsuariosComponent implements OnInit {
  //lista:Array<Usuarios>;
  lista:Array<Usuarios>=[]; //<-- La lista de arriba es de prueba, cuando estes probando el backend
  // tienes que comentar o borrar la de arriba, y ocupar la que esta aqui.
  constructor(private servicioUsuarios:ServicioUsuariosService) { 

  }

  ngOnInit(): void {
    this.servicioUsuarios.ConsultarUsuarios().subscribe(datos=>{
      console.log(datos.length);
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
      }
    });
  }

}

