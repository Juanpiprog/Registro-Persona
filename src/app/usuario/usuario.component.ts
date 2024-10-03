import { Component } from '@angular/core';
import { Usuario } from '../models';
import { RegistroService } from '../registro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  
  nuevoUsuario: Usuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  
  constructor(private registroService: RegistroService) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.usuarios = this.registroService.mostrarUsuarios(); 
  }

  agregarUsuario() {
    this.registroService.agregarUsuario(this.nuevoUsuario.nombre, this.nuevoUsuario.ci, this.nuevoUsuario.telefono, this.nuevoUsuario.ciudad, this.nuevoUsuario.username);
    this.cargarDatos();
    this.resetNuevoUsuario();
  }

  eliminarUsuario(ci: string | null) {
    if (ci) {
      this.registroService.eliminarUsuario(ci);
      this.cargarDatos();
    }
  }

  

  private resetNuevoUsuario() {
    this.nuevoUsuario = { nombre: '', ci: '', telefono: '', ciudad: '', username: '' };
  }

 
}



