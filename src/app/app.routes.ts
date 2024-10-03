import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component'; // Asegúrate de que la ruta sea correcta
import { ClienteComponent } from './cliente/cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  { path: '', component: RegistroComponent }, // Ruta por defecto
  { path: 'cliente', component: ClienteComponent },
  { path: 'usuario', component: UsuarioComponent }
];
