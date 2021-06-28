import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTicketComponent } from '../app/pages/crear-ticket/crear-ticket.component';
import { MostrarTicketsComponent } from '../app/pages/mostrar-tickets/mostrar-tickets.component';
import { MostrarUsuariosComponent } from '../app/pages/mostrar-usuarios/mostrar-usuarios.component';
import { ListarPrioridadComponent } from '../app/pages/listar-prioridad/listar-prioridad.component';
import { IniciarSesionComponent } from '../app/pages/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from '../app/pages/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'',component:IniciarSesionComponent},
  {path:'crear-ticket',component:CrearTicketComponent},
  {path:'mostrar-ticket',component:MostrarTicketsComponent},
  {path:'mostrar-usuario',component:MostrarUsuariosComponent},
  {path:'mostrar-prioridad',component:ListarPrioridadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
