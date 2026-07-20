import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modelo de una tarea
interface Tarea {
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Título de la aplicación
  titulo = 'Gestor de Tareas ESPE';

  // Campo para ingresar una nueva tarea
  nuevaTarea = '';

  // Estado de conexión
  conectado = true;

  // Lista inicial de tareas
  tareas: Tarea[] = [
    { nombre: 'Realizar laboratorio PWA', completada: false },
    { nombre: 'Instalar Angular', completada: true },
    { nombre: 'Configurar Bootstrap', completada: false }
  ];

  // Se ejecuta al iniciar la aplicación
  ngOnInit() {

    console.log('[APP] Aplicación iniciada');

    if ('serviceWorker' in navigator) {
      console.log('[APP] El navegador soporta Service Workers');
    }

    // Recuperar tareas almacenadas
    const datos = localStorage.getItem('tareas');

    if (datos) {
      this.tareas = JSON.parse(datos);
    }

  }

  // Guardar tareas en LocalStorage
  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  // Evento cuando vuelve Internet
  @HostListener('window:online')
  conexionRestablecida() {
    this.conectado = true;
    console.log('[APP] Conexión restablecida');
  }

  // Evento cuando se pierde Internet
  @HostListener('window:offline')
  conexionPerdida() {
    this.conectado = false;
    console.log('[APP] Conexión perdida');
  }

  // Agregar nueva tarea
  agregarTarea() {

    if (this.nuevaTarea.trim() === '') {
      return;
    }

    this.tareas.push({
      nombre: this.nuevaTarea,
      completada: false
    });

    this.guardarTareas();

    console.log('[APP] Tarea agregada:', this.nuevaTarea);

    this.nuevaTarea = '';

  }

  // Cambiar estado de una tarea
  cambiarEstado(tarea: Tarea) {

    tarea.completada = !tarea.completada;

    this.guardarTareas();

    console.log('[APP] Estado cambiado:', tarea.nombre);

  }

  // Eliminar una tarea
  eliminarTarea(indice: number) {

    console.log('[APP] Tarea eliminada:', this.tareas[indice].nombre);

    this.tareas.splice(indice, 1);

    this.guardarTareas();

  }

}