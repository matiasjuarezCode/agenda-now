/**
 * COMENTARIO DIDÁCTICO: ¿Qué es un Componente Angular?
 * Un componente en Angular es el bloque de construcción fundamental de la UI.
 * Se compone de 3 partes principales que trabajan juntas:
 * 1. Clase TS (EmpresasComponent): Contiene la lógica y los datos.
 * 2. Template HTML (empresas.component.html): Estructura visual de lo que el usuario ve.
 * 3. Estilos SCSS (empresas.component.scss): Apariencia visual del componente.
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para usar [(ngModel)]
import { Empresa } from './empresa.model'; // Importamos nuestra interfaz

@Component({
  selector: 'app-empresas',
  standalone: true, // Indica que este componente se maneja solo, sin depender de un NgModule
  imports: [CommonModule, FormsModule], // Importamos módulos básicos para el HTML y formularios
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent {

  /**
   * COMENTARIO DIDÁCTICO: El "Estado" del componente.
   * El estado son las variables (propiedades de la clase) que almacenan datos.
   * En Angular, cuando una de estas propiedades cambia, el framework "reacciona"
   * y actualiza la vista (el HTML) de forma automática.
   */

  // Lista de empresas hardcodeada para empezar
  empresas: Empresa[] = [
    { id: 1, nombre: 'Angular Academy', email: 'hola@angular.edu', telefono: '12345678', activa: true },
    { id: 2, nombre: 'Frontend Labs', email: 'contacto@labs.ts', telefono: '87654321', activa: false }
  ];

  // Objeto que representa la empresa que el usuario está escribiendo en el formulario
  empresaForm: Empresa = this.formularioVacio();

  // Bandera para saber si estamos en modo "Editar" o "Agregar" nueva empresa
  editando: boolean = false;

  /**
   * COMENTARIO DIDÁCTICO: Getters
   * Un "getter" es una propiedad que calcula su valor en el momento que se pide.
   * Aquí nos sirve para cambiar el texto del botón del formulario según el estado.
   */
  get textoBoton(): string {
    return this.editando ? 'Actualizar Empresa' : 'Registrar Empresa';
  }

  /**
   * COMENTARIO DIDÁCTICO: Resetear formulario
   * Usamos este método para que el objeto tenga sus valores por defecto (vacíos).
   * Al resetearlo, el formulario en el HTML también se limpia gracias al binding.
   */
  formularioVacio(): Empresa {
    return {
      id: 0,
      nombre: '',
      email: '',
      telefono: '',
      activa: true
    };
  }

  /**
   * COMENTARIO DIDÁCTICO: El Spread Operator { ...objeto }
   * Usamos { ...empresa } para crear una COPIA del objeto en lugar de pasar la referencia.
   * Esto es vital para que al editar en el formulario no cambie la tabla en tiempo real
   * antes de que el usuario haga clic en "Guardar".
   */
  seleccionarParaEditar(empresa: Empresa): void {
    this.empresaForm = { ...empresa }; 
    this.editando = true;
  }

  guardar(): void {
    /**
     * COMENTARIO DIDÁCTICO: Diferencia entre Agregar y Editar
     * - Si editando es falso: Es una empresa nueva, generamos un ID y la agregamos al array.
     * - Si editando es verdadero: Es una empresa existente, buscamos su posición y la reemplazamos.
     */
    if (this.editando) {
      // Editar: Buscamos el índice mediante el ID
      const indice = this.empresas.findIndex(e => e.id === this.empresaForm.id);
      if (indice !== -1) {
        this.empresas[indice] = { ...this.empresaForm };
      }
    } else {
      /**
       * COMENTARIO DIDÁCTICO: Math.max() para generar ID
       * Math.max nos da el valor más alto de un conjunto de números. 
       * Lo usamos para encontrar el ID más alto actual y sumarle 1.
       */
      const nuevoId = this.empresas.length > 0 
        ? Math.max(...this.empresas.map(e => e.id)) + 1 
        : 1;

      this.empresaForm.id = nuevoId;
      this.empresas.push({ ...this.empresaForm });
    }

    this.cancelar(); // Limpia el formulario después de guardar
  }

  cancelar(): void {
    this.empresaForm = this.formularioVacio();
    this.editando = false;
  }

  /**
   * COMENTARIO DIDÁCTICO: Array.filter()
   * El método filter() crea un nuevo array que contiene solo los elementos 
   * que cumplen una condición. Lo usamos para "quitar" de la lista la empresa
   * cuyo ID coincida con el que queremos borrar.
   */
  eliminar(id: number): void {
    if (confirm('¿Seguro quieres eliminar esta empresa?')) {
      this.empresas = this.empresas.filter(e => e.id !== id);
    }
  }

}

/**
 * TAREA PARA EL DEVELOPER: Próximo Paso
 * Implementar un ABM de Clientes que vivan "dentro" de cada empresa seleccionada.
 * Pistas:
 * 1. Crea cliente.model.ts con: id, nombre, email, telefono, empresaId (vínculo con empresa).
 * 2. Crea clientes.component.ts/html/scss siguiendo exactamente este mismo patrón de empresas.
 * 3. En la tabla de empresas, agrega un botón "Ver Clientes". Cuando se toque, muestra un panel
 *    o el componente de clientes.
 * 4. Pasa el ID de la empresa seleccionada al componente de clientes usando un Decorador @Input().
 * 5. Dentro del componente de clientes, filtra la lista para mostrar solo los clientes cuyo
 *    empresaId coincida con el que recibiste por @Input().
 */
