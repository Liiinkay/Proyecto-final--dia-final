import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTicketComponent } from './pages/crear-ticket/crear-ticket.component';
import { MostrarTicketsComponent } from './pages/mostrar-tickets/mostrar-tickets.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltrarPorEstadoPipe } from './pipes/filtrar-por-estado.pipe';
import { MostrarUsuariosComponent } from './pages/mostrar-usuarios/mostrar-usuarios.component';
import { ListarPrioridadComponent } from './pages/listar-prioridad/listar-prioridad.component';
import { FiltrarPorPrioridadPipe } from './pipes/filtrar-por-prioridad.pipe';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearTicketComponent,
    MostrarTicketsComponent,
    HeaderComponent,
    FooterComponent,
    FiltrarPorEstadoPipe,
    MostrarUsuariosComponent,
    ListarPrioridadComponent,
    FiltrarPorPrioridadPipe,
    IniciarSesionComponent,
    CrearCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
