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
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Empresa } from './empresa.model';
import { Clientecomponent } from '../cliente/cliente';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Clientecomponent],
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent {
  empresas: Empresa[] = [
    {
      id: 1,
      nombre: 'Angular Academy',
      email: 'hola@angular.edu',
      telefono: '12345678',
      activa: true,
    },
    {
      id: 2,
      nombre: 'Frontend Labs',
      email: 'contacto@labs.ts',
      telefono: '87654321',
      activa: false,
    },
  ];

  empresaFormGroup: FormGroup;
  editando: boolean = false;
  empresaSeleccionadaId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.empresaFormGroup = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      activa: [false],
    });
  }

  get textoBoton(): string {
    return this.editando ? 'Actualizar Empresa' : 'Registrar Empresa';
  }

  guardar(): void {
    if (this.empresaFormGroup.valid) {
      const nuevaEmpresa = this.empresaFormGroup.value;
      if (this.editando) {
        const index = this.empresas.findIndex(
          (e) => e.id === this.empresaSeleccionadaId,
        );
        if (index !== -1) {
          this.empresas[index] = {
            ...nuevaEmpresa,
            id: this.empresaSeleccionadaId,
          };
        }
      } else {
        const nuevoId =
          this.empresas.length > 0
            ? Math.max(...this.empresas.map((e) => e.id)) + 1
            : 1;
        this.empresas.push({ ...nuevaEmpresa, id: nuevoId });
      }
      this.cancelar();
    }
  }

  cancelar(): void {
    this.empresaFormGroup.reset({ activa: false });
    this.editando = false;
    this.empresaSeleccionadaId = null;
  }

  seleccionarParaEditar(empresa: Empresa): void {
    this.editando = true;
    this.empresaSeleccionadaId = empresa.id;
    this.empresaFormGroup.patchValue(empresa);
  }

  eliminar(id: number): void {
    this.empresas = this.empresas.filter((e) => e.id !== id);
  }

  verClientes(id: number): void {
    this.empresaSeleccionadaId = id;
  }
}
