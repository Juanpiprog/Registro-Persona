//esto es la 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../registro.service';
import { Usuario, Cliente } from '../models';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule] // Add imports here
})
export class RegistroComponent {
}