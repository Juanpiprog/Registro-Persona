import { Component } from '@angular/core';
import { Cliente } from '../models';
import { RegistroService } from '../registro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  
  clientes: Cliente[] = [];
  
  nuevoCliente: Cliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };

  constructor(private registroService: RegistroService) {
    this.cargarDatos();
  }

  cargarDatos() {
    this.clientes = this.registroService.mostrarClientes();
  }

  
  

  agregarCliente() {
    this.registroService.agregarCliente(this.nuevoCliente.nombre, this.nuevoCliente.ci, this.nuevoCliente.telefono, this.nuevoCliente.ciudad, this.nuevoCliente.direccion);
    this.cargarDatos();
    this.resetNuevoCliente();
  }

  
  eliminarCliente(ci: string | null) {
    if (ci) {
      this.registroService.eliminarCliente(ci);
      this.cargarDatos();
    }
  }

  

  private resetNuevoCliente() {
    this.nuevoCliente = { nombre: '', ci: '', telefono: '', ciudad: '', direccion: '' };
  }
}



