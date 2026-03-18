import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proveedor } from './proveedor.model';

@Component({
  selector: 'app-proveedor',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './proveedor.html',
  styleUrls: ['./proveedor.scss'],
})


 
export class ProveedorComponent {
  proveedores: Proveedor[] = [];

  editando: boolean = false;

  proveedorForm: any = {
    id: 0,
    razonSocial: '',
    cuit: '',
    email: ''
  };
  guardar() {

  if (!this.editando) {

    const nuevoProveedor = {
      ...this.proveedorForm,
      id: this.proveedores.length + 1
    };

    this.proveedores.push(nuevoProveedor);

  } else {

    const index = this.proveedores.findIndex(p => p.id === this.proveedorForm.id);

    if (index !== -1) {
      this.proveedores[index] = { ...this.proveedorForm };
    }

    this.editando = false;
  }

  this.cancelar();
}

cancelar() {
  this.proveedorForm = {
    id: 0,
    razonSocial: '',
    cuit: '',
    email: ''
  };

  this.editando = false;
}

seleccionarParaEditar(proveedor: any) {
  this.proveedorForm = { ...proveedor };
  this.editando = true;
}

eliminar(id: number) {
  this.proveedores = this.proveedores.filter(p => p.id !== id);
}

}
