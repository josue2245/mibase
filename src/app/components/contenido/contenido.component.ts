import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  nuevoLugarForm: FormGroup; // Formulario para la creación/edición
  mensaje: string = ''; // Variable para mostrar mensajes
  lugar: string = ''; // Información del lugar
  ruta: string = ''; // Ruta al lugar
  tipo: string = ''; // Tipo de lugar
  ciudad: string = ''; // Información de la ciudad

  constructor(private fb: FormBuilder) {
    this.nuevoLugarForm = this.fb.group({
      id_lugares: [''],
      nombre: [''],
      direccion: [''],
      tipo: ['']
    });
  }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  // Método para crear un lugar
  crearLugar(): void {
    this.mensaje = 'La vainilla'; // Mensaje de prueba
  }

  // Métodos para mostrar diferentes tipos de información
  mostrarLugar(): void {
    this.lugar = 'Lugar: Plaza Central - Dirección: Avenida Principal, 123'; // Información de un lugar
  }

  mostrarRuta(): void {
    this.ruta = 'Ruta: Desde el Parque Central, camina hacia el norte por 500 metros y gira a la derecha.'; // Ruta hacia el lugar
  }

  mostrarTipo(): void {
    this.tipo = 'Tipo: Centro comercial'; // Tipo de lugar
  }

  mostrarCiudad(): void {
    this.ciudad = 'Ciudad: Ciudad del Sol - Descripción: Una ciudad moderna con arquitectura impresionante y un clima cálido todo el año.'; // Información de la ciudad
  }

  // Método para limpiar todos los resultados
  cancelarResultados() {
    this.mensaje = '';
    this.lugar = '';
    this.ruta = '';
    this.tipo = '';
    this.ciudad = '';
  }
}
