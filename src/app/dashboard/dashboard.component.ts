import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from '../empresas/empresas.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, EmpresasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  /**
   * COMENTARIO DIDÁCTICO: Navegación Interna
   * Usamos una variable de 'seccionActual' para decidir qué componente mostrar.
   * Dependiendo de lo que el usuario pulse en el sidebar, esta variable cambia.
   */
  seccionActual: string = 'empresas';

  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }
}

/**
 * TAREA PARA EL DEVELOPER: Estructura de los Nuevos Modelos
 * 
 * Ya tienes el ABM de Empresas funcionando. Ahora debes crear los archivos
 * para Clientes, Brokers y Proveedores siguiendo el mismo patrón.
 * Aquí tienes los modelos "en comentario" para que los crees tú:
 * 
 * 1. MODELO CLIENTE (cliente.model.ts)
 *      id: number;
 *      nombre: string;
 *      email: string;
 *      telefono: string;
 *      empresaId: number; // Para saber de qué empresa es
 * 
 * 2. MODELO BROKER (broker.model.ts)
 *      id: number;
 *      nombre: string;
 *      comision: number; // Porcentaje de ganancia
 *      telefono: string;
 * 
 * 3. MODELO PROVEEDOR (proveedor.model.ts)
 *      id: number;
 *      razonSocial: string;
 *      cuit: string;
 *      email: string;
 * 
 * PISTA: Para cada uno, crea su carpeta, sus 4 archivos (.model, .component.ts, .html, .scss)
 * y luego impórtalos aquí en el Dashboard para mostrarlos con un *ngIf="seccionActual === '...'"
 */
